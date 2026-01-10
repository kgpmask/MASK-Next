import styles from '@/styles/VideoPage.module.css';
import VideoCard from '@/components/VideoCard';
import HeroBanner from '@/components/HeroBanner';

const videos = [
	{ url: 'https://youtu.be/iERYAx3iipw' },
	{ url: 'https://youtu.be/YhVlV_dMoxg' },
	{ url: 'https://youtu.be/D2rnH9XqwvA' },
	{ url: 'https://youtu.be/PDCHDYsBDWA' },
	{ url: 'https://youtu.be/VxVDJhMU6Zc' },
	{ url: 'https://youtu.be/P0NxHvWz1ns' },
	{ url: 'https://youtu.be/w_tkq4syNnI' },
	{ url: 'https://youtu.be/HM1ld5vIqFg' },
	{ url: 'https://youtu.be/f4muqjlSwYI' },
	{ url: 'https://youtu.be/zJJGrPb8ymE' },
	{ url: 'https://youtu.be/oXpj4H9Qrcw' },
	{ url: 'https://youtu.be/unITcghHNVI' },
	{ url: 'https://youtu.be/HCl4m9ojMMc' },
	{ url: 'https://youtu.be/u7jJ2coeBRo' },
	{ url: 'https://youtu.be/GX7TAigwZPw' },
	{ url: 'https://youtu.be/S1pFkcsuMYE' },
	{ url: 'https://youtu.be/yhtxX3JkShI' },
	{ url: 'https://youtu.be/0TJkcTWEu9c' },
	{ url: 'https://youtu.be/9W4eyQ7LP7g' },
	{ url: 'https://youtu.be/swFVafJvVac' }
];

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
