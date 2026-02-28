import styles from '@/styles/home/HomePage.module.css';
import Carousel from '@/components/Carousel';
import Button from '../Button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function FanArtSideProp () {
	return (
		<div className={styles['text-content']} >
			<h1>
				<strong>Fanart</strong> Submissions
			</h1>
			<p>
				We feature a diverse range of work from talented artists within our society.
				From traditional to digital art, each piece reflects unique creativity and vision.
			</p>
			<Button text="Our Artwork" url={'/art'} color="black" />
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

export default function FanartSection ({ artworks }) {
	const { width } = useWindowSize();
	const sidePropVertical = width <= 1024;

	return (
		<div className={styles['fanart']}>
			<Carousel
				data={artworks}
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
