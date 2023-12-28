import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import Member, { IMember, IRecord } from '@/utils/models/Member';

export type TeamType = {
	name: string;
	icon: string;
};

export interface YearDataType {
	name: string;
	roll: string;
	image: string;
	teams: TeamType[];
	position: string;
}

async function getMembersbyYear(year: number): Promise<YearDataType[]> {
	const data: IMember[] = await Member.find({ 'records.year': year }).sort('name').lean();
	const yearData: YearDataType[] = [];
	const teamsData = require('@/utils/data/teams.json');

	data.forEach((member) => {
		const rec = member.records.find((rec) => rec.year === year);
		let pos: string | undefined;

		if (rec) {
			yearData.push({
				name: member.name,
				roll: member.roll,
				image: '../assets/members/' + member.image,
				teams: rec.teams.map((teamID) => {
					const team: TeamType = {
						name: teamsData[year][teamID].name,
						icon: teamsData[year][teamID].icon,
					};
					team.icon += teamID[1] === 'H' ? !(pos = 'H') || '-head' : teamID[1] === 'S' ? !(pos = 'S') || '-sub' : '';
					return team;
				}),
				position: pos ? (rec.position === 'Governor' ? rec.position : pos === 'H' ? 'Team Heads' : 'Team Sub-Heads') : rec.position,
			});
		}
	});

	return yearData;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	await dbConnect();

	const yearName = Number(req.query.year);
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
		'Former Members': [],
	};

	membersData.forEach((member) => {
		try {
			status[member.position].push(member);
		} catch {
			status[member.position + 's'].push(member);
		}
	});

	const membersObj = Object.entries(status);
	const membersTitle = `Members: ${yearName}-${(yearName % 100) + 1}`;

	res.status(200).json({
		membersObj,
		membersTitle,
		prev: yearName - 1 >= 2020 ? `${yearName - 1}-${yearName % 100}` : undefined,
		next: yearName + 1 <= 2023 ? `${yearName + 1}-${(yearName % 100) + 2}` : undefined,
	});
}
