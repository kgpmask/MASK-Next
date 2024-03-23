import React, { useState, useEffect, ReactNode } from 'react';
import styles from '@/styles/Carousel.module.css';
import 'primeicons/primeicons.css';

interface CarouselProps {
  height: number;
  children: ReactNode;
  width: number;
}

const Dots = ( {
	currentIndex,
	totalItems
}: {
  currentIndex: number;
  totalItems: number;
} ) => {
	const dots = [];
	for (let i = 0; i < totalItems; i++) {
		dots.push(
			<span
				key={i}
				className={i === currentIndex ? styles.dotActive : styles.dot}
			></span>
		);
	}
	return <div className={styles.dotsContainer}>{dots}</div>;
};
const Carousel: React.FC<CarouselProps> = ( { height, width, children } ) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalItems = React.Children.count(children);

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
	};

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
	};

	useEffect(() => {
		const interval = setInterval(goToNextSlide, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<div className={styles.carouselContainer} style={{ height, width }}>
				<button className={styles.carouselButton} onClick={goToPrevSlide}>
					<i className="pi pi-angle-left"></i> {/* Add the left arrow icon */}
				</button>
				{React.Children.map(children, (child, index) => 
					<div
						className={
							index === currentIndex
								? styles.carouselItemActive
								: styles.carouselItem
						}
					>
						{child}
					</div>
				)}

				<button className={styles.carouselButton} onClick={goToNextSlide}>
					<i className="pi pi-angle-right"></i> {/* Add the right arrow icon */}
				</button>
			</div>
			<Dots currentIndex={currentIndex} totalItems={totalItems} />
		</div>
	);
};

export default Carousel;
