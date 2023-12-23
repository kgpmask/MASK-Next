/* eslint-disable react-hooks/exhaustive-deps */
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from '@/styles/VideoCarousel.module.css';
import React, { useState, useEffect, useCallback } from 'react';
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
interface Video {
	id: string;
	name: string;
}

interface VideosCarouselProps {
	videos: Video[];
}

export default function VideosCarousel({ videos }: VideosCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? videos.length - 1 : prevIndex - 1
		);
		resetTimeout();
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === videos.length ? 0 : prevIndex + 1
		);
		resetTimeout();
	};

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
		resetTimeout();
	};



	// Timeout settings
	const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
	const timeoutDelay = 3000; // Change video every 3 seconds

	const resetTimeout = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(handleNext, timeoutDelay);
	}, [handleNext]);

	useEffect(() => {
		resetTimeout();

		// Cleanup function to clear the timeout when the component unmounts
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [currentIndex, resetTimeout]);

	if (videos.length === 0) {
		return null; // or render some default content
	}

	return (
		<>
			<div id="vid-main" className={styles['with-controls']}>
				<div className={styles['vidshow-container']}>
					<div className={styles['vidshow']}>
						<div className={styles['youtube-videos']}>
							<LiteYouTubeEmbed
								key={videos[currentIndex].id}
								id={videos[currentIndex].id}
								title={videos[currentIndex].name}
								wrapperClass={styles['youtube-vid'] + ' yt-lite'}
								containerElement='div'
								webp={true}
								
							/>
						</div>
						<button className={`${styles['control-btn']} ${styles['left-btn']}`} onClick={handlePrevious}>
							<BiSolidChevronLeft />
						</button>
						<button className={`${styles['control-btn']} ${styles['right-btn']}`} onClick={handleNext}>
							<BiSolidChevronRight />
						</button>
					</div>
				</div>
			</div>
			<div className={styles['carousel-indicator']}>
				{videos.map((_, index) => (
					<div
						key={index}
						className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
						onClick={() => handleDotClick(index)}
					></div>
				))}
			</div>
		</>
	);
}