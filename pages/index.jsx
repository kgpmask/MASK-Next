import styles from '@/styles/home/HomePage.module.css';
import HeroSection from '@/components/home/HeroSection';
import RecentEventsSection from '@/components/home/RecentEventsSection';
import FanartSection from '@/components/home/FanartSection';
import AMVSection from '@/components/home/AMVSection';
import AboutUsSection from '@/components/home/AboutUsSection';
// TODO: Move this to database
import events from '@/data/Events.json';

export async function getServerSideProps () {
	const res = await fetch('http://localhost:3000/api/artworks?limit=6');
	const artworksRaw = await res.json();

	const artworks = artworksRaw.map(item => {
		return {
			src: `/assets/art/${item.link}`
		};
	});

	return {
		props: { artworks }
	};
}

export default function Home ({ artworks }) {
	return (
		<div className={styles.home}>
			<HeroSection />
			<RecentEventsSection events={events} />
			<FanartSection artworks={artworks} />
			<AMVSection />
			<div id="about">
				<AboutUsSection />
			</div>
		</div>
	);
}
