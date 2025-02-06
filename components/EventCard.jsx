

import React from 'react';
import Image from 'next/image';
import { Cabin } from 'next/font/google';
import styles from '../styles/EventCard.module.css';
import Button from './Button';

const cabin = Cabin({ subsets: ['latin'] });

export default function EventCard({ event }) {
	return (
		<div className={`${styles.eventCard} ${cabin.className}`}>
			{/* <div className={styles.contentWrapper}> */}
				<div className={styles.imageWrapper}>
					<Image src={event.image} alt={event.title} width={512} height={290} className={styles.eventImage} />
				</div>
				<div className={styles.textContainer}>
					<div className={styles.textWrapper}>
						<h3 className={styles.eventTitle}>{event.title}</h3>
						<div className={styles.eventMeta}>
							<p>Date: {event.date}</p>
							<p>Venue: {event.venue}</p>
							<p>By: {event.author}</p>
						</div>
						<p className={styles.eventDescription}>
							{event.description}
						</p>
					</div>
					<div className={styles.buttonWrapper}>
						<Button text="Read More" url="/" type="black" />
					</div>
				</div>
			{/* </div> */}
		</div>
	);
}
