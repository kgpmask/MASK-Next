// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/database/dbInit';
import { getMembersByTears } from '@/utils/database/dbHandler';

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	const _db = await dbConnect();
	const m = await getMembersByTears( req.body.year );
	res.status( 200 ).json( JSON.stringify( m ) );
}
