// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/database/dbInit';
import { getMembersByYears } from '@/utils/database/dbHandler';

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const _ = await dbConnect();
	const m = await getMembersByYears( Number( req.query.year ) );
	res.status( 200 ).json( JSON.stringify( m ) );
}
