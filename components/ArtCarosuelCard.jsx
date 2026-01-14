import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ArtCarouselCard.module.css';

// takes in data object
const ArtCarouselCard = ({ dataObj }) => {
	return (
		<div className={styles['art-container']}>
			<Image
				src={dataObj.src}
				width={558}
				height={421}
				alt="art image"
				className={styles['art-image']}
				draggable={false}
			/>

			<div className={styles['art-overlay']}>
				<h3 className={styles['art-title']}>{dataObj.author}</h3>
				<div>{dataObj.description}</div>
			</div>
		</div>
	);
};

export default ArtCarouselCard;
