import styles from '@/styles/home/HomePage.module.css';
import recentContent from '@/data/recentEvents.json';
import Carousel from '@/components/Carousel';
import Button from '../Button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const fanartItems = recentContent.slice(0, 5);

function FanArtSideProp () {
	return (
		<div className={styles['text-content']} >
			<h1>
				<strong>Fanart</strong> Submissions
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<Button text="Our Artwork" href={'#'} color="black" />
		</div>
	);
}

const FanArtCarouselCard = ({ dataObj }) => {
	return (
		<Image
			draggable={false}
			src={dataObj.src}
			width={600}
			height={400}
			className={styles['fanart-image']}
			alt="event poster"
		/>
	);
};

function useWindowSize () {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		function handleResize () {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

export default function FanartSection () {
	const { width } = useWindowSize();
	const sidePropVertical = width <= 1024;

	return (
		<div className={styles['fanart']}>
			<Carousel
				data={fanartItems}
				Card={FanArtCarouselCard}
				numPerPage={1}
				showNavigator={true}
				SideProp={FanArtSideProp}
				showSideProp={true}
				sidePropVertical={sidePropVertical}
				showBackground={true}
				autoscroll={true}
			/>
		</div>
	);
}
