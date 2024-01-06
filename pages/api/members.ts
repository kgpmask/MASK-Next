import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import Member, { IMember, IRecord } from '@/utils/models/Member';

export interface YearDataType {
	name: string;
	roll: string;
	image: string;
	teams: string[];
	position: string;
}

async function getMembersbyYear (year: number): Promise<YearDataType[]> {
	const data: IMember[] = await Member.find( { 'records.year': year } ).sort('name').lean();
	const yearData: YearDataType[] = [];

	data.forEach((member) => {
		const rec = member.records.find((rec) => rec.year === year);
		let pos: string | undefined;

		if (rec) {
			yearData.push( {
				name: member.name,
				roll: member.roll,
				image: '/members/' + member.image,
				teams: rec.teams,
				position: pos ? rec.position === 'Governor' 
					? rec.position : pos === 'H' 
						? 'Team Heads' : 'Team Sub-Heads' : rec.position
			} );
		}
	} );

	return yearData;
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	await dbConnect();

	const yearName = Number(req.query.year?.slice(0, 4));
	const membersData: YearDataType[] = await getMembersbyYear(yearName);
	const status: { [key: string]: YearDataType[] } = {
		Governors: [],
		'Team Heads': [],
		'Team Sub-Heads': [],
		Advisors: [],
		'Research Associate': [],
		Executives: [],
		Associates: [],
		Freshers: [],
		'Former Members': []
	};

	membersData.forEach((member) => {
		if (member.image.includes('blank')) return;
		if (member.teams.find((i) => i[1] === 'H') && member.position !== 'Governor') status['Team Heads'].push(member);
		else if (member.teams.find((i) => i[1] === 'S')) status['Team Sub-Heads'].push(member);
		else
			try {
				status[member.position].push(member);
			} catch {
				status[member.position + 's'].push(member);
			}
	} );

	const membersObj = Object.entries(status);
	const membersTitle = `Members: ${yearName}-${yearName % 100 + 1}`;

	res.status(200).json( {
		membersObj,
		membersTitle,
		prev: yearName - 1 >= 2020 ? `${yearName - 1}-${yearName % 100}` : undefined,
		next: yearName + 1 <= 2023 ? `${yearName + 1}-${yearName % 100 + 2}` : undefined
	} );
}
