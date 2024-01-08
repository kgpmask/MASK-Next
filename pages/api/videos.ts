import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import PostModel from '@/utils/models/Post';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	try {
		await dbConnect();

		const vidPosts = await PostModel.find( { type: 'youtube' } ).sort( { date: -1 } );

		return res.status(200).json( { vids: vidPosts } );
	} catch (error) {
		console.error(error);
		res.status(500).json( { error: 'Internal Server Error' } );
	}
}
