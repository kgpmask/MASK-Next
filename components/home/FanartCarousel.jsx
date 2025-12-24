import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import styles from '@/styles/home/HomeFanartCarousel.module.css';

const FanartCarousel = ({
	fanartItems = [],
	currentFanartIndex,
	setCurrentFanartIndex
}) => {
	const sliderRef = useRef(null);
	const hasSwiped = useRef(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);

	// TODO: Reduce this on prod
	const AUTO_SCROLL_DELAY = 4000;

	const getScrollOffset = (num) => sliderRef.current.children[num].offsetLeft;

	useEffect(() => {
		const slideInterval = setInterval(() => {
			if (
				sliderRef.current && sliderRef.current.matches(':hover') ||
        fanartItems.length === 0
			)
				return;
			moveNext();
		}, AUTO_SCROLL_DELAY);

		return () => clearInterval(slideInterval);
	});

	useEffect(() => {
		sliderRef.current.scrollTo({
			left: getScrollOffset(currentFanartIndex),
			behavior: 'smooth'
		});
		if (setCurrentFanartIndex) {
			setCurrentFanartIndex(currentFanartIndex);
		}
	}, [currentFanartIndex]);

	const moveNext = () =>
		setCurrentFanartIndex((cur) => (cur + 1) % fanartItems.length);
	const movePrev = () =>
		setCurrentFanartIndex(
			(cur) => (cur - 1 + fanartItems.length) % fanartItems.length
		);
	const moveHere = (num) => setCurrentFanartIndex(num);

	// Drag Handlers
	const handleDragStart = (e) => {
		setIsDragging(true);
		hasSwiped.current = false;
		setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
	};

	const handleDragEnd = () => {
		setIsDragging(false);
	};

	const handleDragMove = (e) => {
		if (!isDragging || hasSwiped.current) return;
		e.preventDefault();
		const swipeThreshold = 100;
		const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
		const walk = x - startX;

		if (walk < -swipeThreshold) {
			moveNext();
			hasSwiped.current = true;
		} else if (walk > swipeThreshold) {
			movePrev();
			hasSwiped.current = true;
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles['carousel-wrapper']}>
				<div className={styles['content-column']}>
					<div className={styles['text-content']}>
						<p className={styles['title']}>
							<strong>Fanart</strong> Submissions
						</p>
						<p className={styles['description']}>
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
				</div>
				<Image
					src="/assets/icons/left-arrow.svg"
					alt="left arrow"
					width={30}
					height={30}
					className={styles.arrow}
					onClick={movePrev}
				/>
				<div className={styles['slider-container']}>
					<div
						className={styles.slider}
						ref={sliderRef}
						style={{
							cursor: isDragging ? 'grabbing' : 'grab'
						}}
						onMouseDown={handleDragStart}
						onMouseMove={handleDragMove}
						onMouseUp={handleDragEnd}
						onMouseLeave={handleDragEnd}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}
					>
						{fanartItems.map((fanartItem, idx) =>
							<div
								style={{ height: 'fit-content' }}
								key={`item-${idx}`}
								className={styles['item-wrapper']}
							>
								{fanartItem ?
									<div className={styles['item-content']} key={fanartItem.id}>
										<div className={styles['content']}>
											<div className={styles['fanart-poster']}>
												<Image
													draggable={false}
													src={fanartItem.src}
													fill
													alt="fanart poster"
												/>
											</div>
										</div>
									</div>
									:
									<div className={styles['empty-item']}>
										<div className={styles['empty-content']}>No Image</div>
									</div>
								}
							</div>
						)}
					</div>
					<div className={styles['navigation-dots']}>
						{Array.from({ length: fanartItems.length }).map((_, num) =>
							!(num >= currentFanartIndex && num < currentFanartIndex + 1) ?
								<div
									className={styles.dot}
									key={num}
									onClick={() => moveHere(num)}
								></div>
								:
								<div
									className={`${styles.dot} ${styles['active-dot']}`}
									key={num}
								></div>

						)}
					</div>
				</div>
				<Image
					src="/assets/icons/right-arrow.svg"
					alt="right arrow"
					width={30}
					height={30}
					className={styles.arrow}
					onClick={moveNext}
				/>
			</div>
		</div>
	);
};

export default FanartCarousel;
