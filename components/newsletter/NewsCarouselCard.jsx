import React from 'react';
import Image from 'next/image';
import styles from '@/styles/newsletter/NewsCarouselCard.module.css';
import Button from '../Button';

// takes in data object
const NewsCarouselCard = ({ dataObj }) => {
	return (
		<div className={styles['container']}>
			<Image 
				src={dataObj.src} 
				draggable={false}
				width={500} 
				height={600} 
				className={styles['image-desktop']}
				alt="newsletter poster" 
			/>
			<div className={styles['text-container']}>
				<div className={styles['text-content']}>
					<h1 className={styles['title']}>{dataObj.title}</h1>
					<p className={styles['description']}>
						<Image 
							src={dataObj.src} 
							draggable={false}
							width={500} 
							height={600} 
							className={styles['image']}
							alt="newsletter poster" 
						/>
						{dataObj.desc}
					</p>
				</div>
				<Button 
					text={'Read More'} 
					color={'black'} 
					fullWidth={true}
					url={'https://kgpmask.com'}
				/>
			</div>
		</div>
	);
};

export default NewsCarouselCard;
