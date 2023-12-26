// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import Member, { IMember, MemberType } from '@/utils/models/Member';

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();

	const members: Array<MemberType> = [];

	const data: Array<IMember> = await Member.find({
		'records.year': ~~Number( req.query.year )
	});

	data.forEach( ( member ) => {
		const rec = member.records.find(
			( rec ) => rec.year === Number( req.query.year )
		);
		console.log( rec );
		if ( rec ) {
			members.push({
				name: member.name,
				image: member.image,
				position: rec.position,
				teams: rec.position
			});
		}
	});
	res.status( 200 ).json( JSON.stringify( members ) );
}
