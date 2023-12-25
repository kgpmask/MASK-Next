import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/database/dbInit";
import PostModel from "@/utils/models/Post";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		await dbConnect();

		const allPosts = await PostModel.find({}).sort({ date: -1 });
		const posts = allPosts.slice(0, 7);

		posts.forEach((post) => {
			const elapsed = Date.now() - post.date.getTime();
			if (!isNaN(elapsed) && elapsed < 7 * 24 * 60 * 60 * 1000) {
				post.recent = true;
			}
		});
		const toBeDisplayed = 5;
		const art = allPosts.filter((post) => post.type === "art" && post.hype).splice(0, toBeDisplayed);
		const vids = allPosts.filter((post) => post.type === "youtube" && post.hype).splice(0, toBeDisplayed);
		return res.status(200).json({ posts, vids, art });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
