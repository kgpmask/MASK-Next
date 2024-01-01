// components/Carousel.js

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BiSolidChevronRight, BiSolidChevronLeft } from 'react-icons/bi';
import styles from '@/styles/Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  timeoutDelay?: number;
}

const Carousel: React.FC<CarouselProps> = ( {
	children,
	autoplay = true,
	timeoutDelay = 3000
} ) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? React.Children.count(children) - 1 : prevIndex - 1
		);
		resetTimeout();
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === React.Children.count(children) ? 0 : prevIndex + 1
		);
		resetTimeout();
	};

	const handleDotClick = (index: number) => {
		setCurrentIndex(index);
		resetTimeout();
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
	}, [handleNext, autoplay, timeoutDelay]);

	const handleItemClick = () => {
		setIsPlaying(true);
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [currentIndex, resetTimeout, autoplay]);

	return (
		<>
			<div className={styles['carousel-container']}>
				<div className={styles['carousel']}>
					<div className="carousel-content">
						{React.Children.map(children, (child, index) => 
							<div
								key={index}
								className={currentIndex === index ? 'active' : 'inactive'}
								onClick={handleItemClick}
							>
								{child}
							</div>
						)}
					</div>
					<div className={styles['carousel-controls']}>
						<button className={styles['left-btn']} onClick={handlePrevious}>
							<BiSolidChevronLeft />
						</button>
						<button className={styles['right-btn']} onClick={handleNext}>
							<BiSolidChevronRight />
						</button>
					</div>
				</div>
			</div>
			<div className={styles['carousel-indicator']}>
				{React.Children.map(children, (_, index) => 
					<div
						key={index}
						className={`${currentIndex === index ? 'active' : ''}`}
						onClick={() => handleDotClick(index)}
					></div>
				)}
			</div>
		</>
	);
};

export default Carousel;
