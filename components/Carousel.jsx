import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Carousel.module.css';

const Carousel = ({
	data = [],
	Card = {},
	numPerPage = 1,
	showNavigator = true,
	SideProp = {},
	showSideProp = false,
	sidePropVertical = true,
	showBackground = false,
	autoscroll = true,
	isNewsletter = false
}) => {
	const sliderRef = useRef(null);
	const bgSliderRef = useRef(null);
	const cardWidthRef = useRef(0);
	const [sliderWidth, setSliderWidth] = useState('1000px');
	const hasSwiped = useRef(false);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [currentElement, setCurrentElement] = useState(0);
	const currentElementRef = useRef(0);
	const AUTO_SCROLL_DELAY = 3000;
	const [isHovering, setIsHovering] = useState(false);

	// Syncs the ref with the state
	useEffect(() => {
		currentElementRef.current = currentElement;
	}, [currentElement]);

	// Get width of the slider and also handle resizing
	useEffect(() => {
		const slider = sliderRef.current;
		if (!slider || !slider.children.length) return;

		const firstCard = slider.children[0];

		const observer = new ResizeObserver((entries) => {
			const width = entries[0].contentRect.width;

			cardWidthRef.current = width;
			setSliderWidth(`${width * numPerPage}px`);

			// keep scroll position consistent after resize
			slider.scrollTo({
				left: width * currentElementRef.current,
				behavior: 'auto'
			});
		});

		observer.observe(firstCard);
		return () => observer.disconnect();
	}, [numPerPage, data]);

	// this is for when we resize it moves the slider to the correct position
	useEffect(() => {
		const bgSlider = bgSliderRef.current;
		if (!bgSlider || !bgSlider.children.length) return;

		const observer = new ResizeObserver(() => {
			bgSlider.scrollTo({
				left: bgSlider.clientWidth * currentElementRef.current,
				behavior: 'auto'
			});
		});

		observer.observe(bgSlider);
		return () => observer.disconnect();
	}, [numPerPage, data]);

	// Updates the currentElement based on various user input
	// Handle finger dragging
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

		// Check if the drag distance exceeds the threshold
		if (walk < -swipeThreshold) {
			// Swiped Left
			setCurrentElement((prev) => (prev + 1) % data.length);
			hasSwiped.current = true;
		} else if (walk > swipeThreshold) {
			// Swiped Right
			setCurrentElement((prev) => (prev - 1 + data.length) % data.length);
			hasSwiped.current = true;
		}
	};

	// Handle arrow button presses
	const moveNext = useCallback(() => {
		setCurrentElement(prev =>
			prev + numPerPage > data.length - 1 ? 0 : prev + 1
		);
	}, [numPerPage, data.length]);

	const movePrev = useCallback(() => {
		setCurrentElement(prev =>
			prev <= 0 ? data.length - 1 : prev - 1
		);
	}, [data.length]);

	// Handle navigation dots press
	function moveHere (targetNum) {
		setCurrentElement(targetNum);
	}

	// Update the slider position on the screen
	// This effect runs whenever currentElement changes
	useEffect(() => {
		const slider = sliderRef.current;

		if (!slider) return;

		slider.scrollTo({
			left: cardWidthRef.current * currentElement,
			behavior: 'smooth'
		});
	}, [currentElement]);

	// This effect scrolls the bg slider
	useEffect(() => {
		const bgSlider = bgSliderRef.current;
		if (!showBackground || !bgSlider) return;

		bgSlider.scrollTo({
			left: bgSlider.clientWidth * currentElement,
			behavior: 'smooth'
		});

	});

	// Autoscroll
	useEffect(() => {
		if (!autoscroll || isHovering || isDragging || data.length === 0) return;

		const id = setInterval(() => {
			moveNext();
		}, AUTO_SCROLL_DELAY);

		return () => clearInterval(id);
	}, [autoscroll, isHovering, isDragging, data.length, numPerPage, moveNext, currentElement]);

	return (
		<div
			className={styles['container']}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			style={{
				flexDirection: sidePropVertical ? 'column' : 'row',
				padding: showBackground ? '70px' : '',
			}}
		>
			{showBackground &&
				<>
					<div className={styles['bg-carousel-container']}>
						<div
							ref={bgSliderRef}
							className={styles['bg-slider']}
						>
							{data.map((dataObj, idx) =>
								<div key={idx}>
									<Image
										draggable={false}
										src={dataObj.src}
										width={1920}
										height={1080}
										className={styles['bg-image']}
										alt='bg image'
									/>
								</div>
							)}
						</div>
					</div>
					<div className={styles['bg-overlay']}></div>
				</>
			}
			{showSideProp &&
				<SideProp
					currentElement={currentElement}
					setCurrentElement={setCurrentElement}
				/>
			}
			<div className={styles['carousel-container']}>
				<div className={styles['carousel-wrapper']}>
					<Image
						src="/assets/icons/left-arrow.svg"
						alt="left arrow"
						width={30}
						height={30}
						className={styles['arrow']}
						onClick={movePrev}
					/>
					<div
						className={styles['slider']}
						ref={sliderRef}
						style={{
							maxWidth: sliderWidth,
							width: sliderWidth,
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
									<div
										className={styles['item-content']}
										key={dataObj.id}
										style={{
											flex: `0 0 calc((100%) / ${numPerPage})`
										}}
									>
										<Card dataObj={dataObj} key={dataObj.id} />
									</div>
									:
									<div
										className={styles['item-content']}
										style={{
											flex: `0 0 calc((100%) / ${numPerPage})`
										}}
									>
										<div className={styles['empty-content']}></div>
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
						className={styles['arrow']}
						onClick={moveNext}
					/>
				</div>
				{showNavigator &&
					<div className={styles['navigation-dots']}>
						{Array.from({ length: data.length }).map((_, num) =>
							!(num >= currentElement && num < currentElement + numPerPage) ?
								<div
									className={styles['dot']}
									key={num}
									onClick={() => moveHere(num)}
								></div>
								:
								<div
									className={`${styles['dot']} ${styles['active-dot']}`}
									key={num}
								></div>
						)}
					</div>
				}
			</div>
		</div>
	);
};

export default Carousel;
