import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from '@/styles/newsletter/NewsCarousel.module.css';

// takes in parameters, Template , showNavigator, numPerPage, discrete
const NewsCarousel = ({
	Template = {},
	showNavigator,
	numPerPage,
	discrete,
	data = [],
	onSlideChange
}) => {
	const [currentElement, setCurrentElement] = useState(0);
	const sliderRef = useRef(null);
	const hasSwiped = useRef(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);

	const AUTO_SCROLL_DELAY = 4000000;
	const [isHovering, setIsHovering] = useState(false);

	const getScrollOffset = (num) => sliderRef.current.children[num].offsetLeft;

	// useEffect(() => {
	// 	if (isHovering | data.length === 0) return;
	// 	const slideInterval = setInterval(() => {
	// 		moveNext();
	// 	}, AUTO_SCROLL_DELAY);

	// 	return () => clearInterval(slideInterval);
	// });

	useEffect(() => {
		sliderRef.current.scrollTo({
			left: getScrollOffset(currentElement),
			behavior: 'smooth'
		});
		if (onSlideChange) {
			onSlideChange(currentElement);
		}
	}, [currentElement, onSlideChange]);

	const moveNext = () => setCurrentElement((cur) => (cur + 1) % data.length);
	const movePrev = () =>
		setCurrentElement((cur) => (cur - 1 + data.length) % data.length);
	const moveHere = (num) => setCurrentElement(num);

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
	console.log(data);
	return (
		<div
			className={styles.container}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div className={styles['carousel-wrapper']}>
				<Image
					src="/assets/icons/left-arrow.svg"
					alt="left arrow"
					width={30}
					height={30}
					className={styles.arrow}
					onClick={movePrev}
				/>
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
					{data.map((dataObj, idx) =>
						<div
							style={{ height: 'fit-content' }}
							key={`item-${idx}`}
							className={styles['item-wrapper']}
						>
							{dataObj ?
								<div className={styles['item-content']} key={dataObj.id}>
									<Template dataObj={dataObj} key={dataObj.id} />
								</div>
								:
								<div className={styles['empty-item']}>
									<div className={styles['empty-content']}>No Artwork</div>
								</div>
							}
						</div>
					)}
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

export default NewsCarousel;
