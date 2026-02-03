import styles from '@/styles/home/HomePage.module.css';
import HeroSection from '@/components/home/HeroSection';
import RecentEventsSection from '@/components/home/RecentEventsSection';
import FanartSection from '@/components/home/FanartSection';
import AMVSection from '@/components/home/AMVSection';
import AboutUsSection from '@/components/home/AboutUsSection';
import { connectDatabase } from '@/database/database';
import Post from "@/database/schemas/Post";
// TODO: Move this to database
import events from '@/data/recentEvents.json';

export async function getStaticProps () {
	await connectDatabase();
	let artworksRaw = await Post.find(
		{ type: 'art' },
		{ _id: 0, metadata: 0, type: 0, page: 0, hype: 0, __v: 0 }
	).sort({ date: -1 }).limit(6).lean();

	const artworks = artworksRaw.map(item => {
		const d = item.date instanceof Date ? item.date : new Date(item.date);
		return {
			src: `/assets/art/${item.link}`
		};
	});

	return {
		props: { artworks, events },

		revalidate: process.env.NODE_ENV === 'production'
			? 60 * 60
			: 1
	};
}

export default function Home ({ artworks, events }) {
	return (
		<div className={styles.home}>
			<HeroSection />
			<RecentEventsSection events={events} />
			<FanartSection artworks={artworks} />
			<AMVSection />
			<AboutUsSection />
		</div>
	);
}
