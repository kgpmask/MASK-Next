/* eslint-disable react-hooks/exhaustive-deps */
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from '@/styles/VideoCarousel.module.css';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
interface Video {
	id: string;
	name: string;
}

interface VideosCarouselProps {
	videos: Video[];
}

// Custom LiteYouTubeWrapper component
const LiteYouTubeWrapper = ({
	videoId,
	title,
	onClick,
}: {
	videoId: string;
	title: string;
	onClick: () => void;
}) => {
	return (
		<div onClick={onClick} style={{ cursor: 'pointer' }}>
			<LiteYouTubeEmbed
				id={videoId}
				title={title}
				wrapperClass={styles['youtube-vid'] + ' yt-lite'}
				containerElement='div'
				webp={true}
			/>
		</div>
	);
};

export default function VideosCarousel({ videos }: VideosCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [autoplay, setAutoplay] = useState<boolean>(true); // New state variable


	// Declare timeoutRef
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const timeoutDelay = 3000; // Change video every 3 seconds

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


	const handleLiteYouTubeEmbedClick = () => {
		setIsPlaying(true);
		setAutoplay(false); // Set autoplay to false when video is played manually
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};
	const resetTimeout = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		if (autoplay) {
			timeoutRef.current = setTimeout(() => {
				handleNext();
				setIsPlaying(false);
			}, timeoutDelay);
		}
	}, [handleNext, autoplay]);

	useEffect(() => {
		resetTimeout();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [currentIndex, resetTimeout, autoplay]);

	if (videos.length === 0) {
		return null; // or render some default content
	}

	return (
		<>
			<div id="vid-main" className={styles['with-controls']}>
				<div className={styles['vidshow-container']}>
					<div className={styles['vidshow']}>
						<div className={styles['youtube-videos']}>
							<LiteYouTubeWrapper
								videoId={videos[currentIndex].id}
								title={videos[currentIndex].name}
								onClick={handleLiteYouTubeEmbedClick}
							/>
						</div>
						{!isPlaying && (
							<>
								<button
									className={`${styles['control-btn']} ${styles['left-btn']}`}
									onClick={handlePrevious}
								>
									<BiSolidChevronLeft />
								</button>
								<button
									className={`${styles['control-btn']} ${styles['right-btn']}`}
									onClick={handleNext}
								>
									<BiSolidChevronRight />
								</button>
							</>
						)}
					</div>
				</div>
			</div>
			<div className={styles['carousel-indicator']}>
				{videos.map((_, index) => (
					<div
						key={index}
						className={`${styles.dot} ${currentIndex === index ? styles.active : ''
							}`}
						onClick={() => handleDotClick(index)}
					></div>
				))}
			</div>
		</>
	);
}