import styles from '@/styles/home/Home.module.css';
import dynamic from 'next/dynamic';
import Carousel from '../Carousel';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const AMVVideoItems = [
	{
		url: 'https://youtu.be/iERYAx3iipw'
	},
	{
		url: 'https://www.youtube.com/watch?v=YhVlV_dMoxg'
	},
	{
		url: 'https://www.youtube.com/watch?v=D2rnH9XqwvA'
	}
];

const VideoCarouselCard = ({ dataObj }) => {

	return (
		<div className={styles['player-wrapper']}>
			<ReactPlayer
				className={styles['react-player']}
				url={dataObj.url}
				width='100%'
				height='100%'
				controls={true}
				light={true}
				playing={true}
			/>
		</div>
	);
};

export default function AMVSection () {
	return (
		<div className={styles['amv-section']}>
			<h1>Anime Music Videos</h1>
			<Carousel
				data={AMVVideoItems}
				Card={VideoCarouselCard}
			/>
		</div>
	);
}
