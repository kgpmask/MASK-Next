import { connectDatabase } from '@/database/database';
import Post from '@/database/schemas/Post';

export default async function handler (req, res) {
	try {
		if (!process.env.MONGO_URL) {
			return res.status(200).json([]);
		}
		await connectDatabase();

		const limit = parseInt(req.query.limit);

		const artworksRaw = await Post.find(
			{ type: 'art' },
			{ _id: 0, metadata: 0, type: 0, page: 0, hype: 0, __v: 0 }
		)
			.sort({ date: -1 })
			.limit(limit)
			.lean();

		res.status(200).json(artworksRaw);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to fetch artworks' });
	}
}
