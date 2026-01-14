import React, { useEffect, useState, useRef } from 'react';
import styles from '@/styles/home/HomePage.module.css';
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
				// light={true}
				// playing={true}
			/>
		</div>
	);
};

export default function AMVSection () {
	const [autoscroll, setAutoscroll] = useState(true);
	const playingCountRef = useRef(0);

	useEffect(() => {
		const onMessage = (event) => {
			if (event.origin !== 'https://www.youtube.com') return;
			if (typeof event.data !== 'string') return;

			if (event.data.includes('infoDelivery') && event.data.includes('"playerState":1')) {
				playingCountRef.current += 1;
				setAutoscroll(false);
			}

			if (event.data.includes('"playerState":2') || event.data.includes('"playerState":0')) {
				playingCountRef.current = Math.max(playingCountRef.current - 1, 0);

				if (playingCountRef.current === 0) {
					setAutoscroll(true);
				}
			}
		};

		window.addEventListener('message', onMessage);
		return () => window.removeEventListener('message', onMessage);
	}, []);

	return (
		<div className={styles['amv-section']}>
			<h1>Anime Music Videos</h1>
			<Carousel
				data={AMVVideoItems}
				Card={VideoCarouselCard}
				autoscroll={autoscroll}
			/>
		</div>
	);
}
