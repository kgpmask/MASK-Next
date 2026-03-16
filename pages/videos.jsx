import styles from '@/styles/VideoPage.module.css';
import VideoCard from '@/components/VideoCard';
import HeroBanner from '@/components/HeroBanner';
import videos from '@/data/videos.json';

export default function VideoPage () {
	return (
		<>
			<HeroBanner
				heroTitle={'Check out our Anime Music Videos'}
				heroContent={
					`Experience the thrill of captivating AMVs created by our talented team. Immerse yourself
					 in a world of dynamic video editing, mesmerizing soundtracks, and breathtaking visuals.`
				}
				buttonContent={'Check out our Youtube Channel'}
				buttonURL={'https://www.youtube.com/@maskiitkgp'}
			/>
			<div className={styles['container-video']}>
				{videos.map((video, idx) =>
					<VideoCard key={idx} dataObj={video} />
				)}
			</div>
		</>
	);
}
