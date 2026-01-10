import Button from '../Button';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/home/HomeRecentEventsCarousel.module.css';

// takes in data object
const RecentEventsCarouselCard = ({ dataObj }) => {
	return (
		<div className={styles['content']}>
			<div>
				<Image
					draggable={false}
					src={dataObj.src}
					width={600}
					height={400}
					className={styles['image']}
					alt="event poster"
				/>
			</div>
			<div className={styles['text-content']}>
				<h1>{dataObj.title}</h1>
				<p>{dataObj.description}</p>
				<p>{dataObj.subdescription}</p>
				<Button text="Read More" href={'#'} />
			</div>
		</div>
	);
};

export default RecentEventsCarouselCard;
