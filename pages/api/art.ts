import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/database/dbInit';
import PostModel from '@/utils/models/Post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		await dbConnect();

		const artPosts = await PostModel.find({ type: 'art' }).sort({ date: -1 });

		return res.status(200).json({ art: artPosts });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
