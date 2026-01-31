import React from 'react';
import styles from '@/styles/NewsletterCard.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NewsletterCard = ({ image, title, description, link, onCardClick }) => {
	const router = useRouter();
	const handleCardClick = () => {
		if (onCardClick) {
			onCardClick();
		}
		router.push(`/newsletters/${link}`);
	};

	const [src, setSrc] = useState(
		`/assets/releases/${image}/cover.webp`
	);

	return (
		<div className={styles.card} onClick={handleCardClick}>
			<div className={styles.imagecontainer}>
				<Image
					src={src}
					alt={title}
					className={styles.image}
					height={400}
					width={300}
				/>
				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default NewsletterCard;
