import { connectDatabase } from '@/database/database';
import Member from '@/database/schemas/Member';

export default async function handler (req, res) {
	try {
		if (!process.env.MONGO_URL) {
			return res.status(200).json([]);
		}
		await connectDatabase();


		const membersData = await Member.find(
			{},
			{ _id: 0 }
		)
			.lean();

		res.status(200).json(membersData);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Failed to fetch members' });
	}
}
