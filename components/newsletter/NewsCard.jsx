import React from 'react';
import styles from '@/styles/newsletter/NewsletterCard.module.css';
import Image from 'next/image';

const NewsletterCard = ({ image, title, description, link, onCardClick }) => {
	const handleCardClick = () => {
		if (onCardClick) {
			onCardClick();
		}
		window.open(link, '_blank');
	};

	return (
		<div className={styles.card} onClick={handleCardClick}>
			<div className={styles.imagecontainer}>
				<Image src={image} alt={title} className={styles.image} height={400} width={300}/>
				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default NewsletterCard;
