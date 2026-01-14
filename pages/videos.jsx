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
					`We feature a diverse range of work from talented artists within our society.
					From traditional  to digital art, each piece reflects unique creativity and vision.`
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
