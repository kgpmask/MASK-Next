import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import User from '@/utils/models/User';

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();

	try {
		const username = req.query.username;
		const email = req.query.email;
		const newUser = await User.create( {
			username,
			email
		} );
		return res.status(201).json( { success: true, data: newUser } );
	} catch (error) {
		console.log(error);
		res.status(500).json( { error: 'Internal Server Error' } );
	}
}
