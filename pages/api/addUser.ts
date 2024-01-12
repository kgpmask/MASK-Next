import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import User from '@/utils/models/User';

export default async function handler (
	req: NextApiRequest,
	res: NextApiResponse
) {
	await dbConnect();

	try {
		const newUser = await User.create( {
			_id: req.query.id,
			name: req.query.name,
			email: req.query.email,
			permissions: []
		} );
		return res.status(201).json( { success: true, data: newUser } );
	} catch (error) {
		console.log(error);
		res.status(500).json( { error: 'Internal Server Error' } );
	}
}
