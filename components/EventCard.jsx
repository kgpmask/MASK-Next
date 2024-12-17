/**
 * EventCard component renders an event card with an image, title, date, and location.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event data.
 * @param {string} props.event.image - The URL of the event image.
 * @param {string} props.event.title - The title of the event.
 * @param {string} props.event.date - The date of the event.
 * @param {string} props.event.location - The location of the event.
 * @returns {JSX.Element} The rendered event card component.
 */

import React from 'react';
import Image from 'next/image';
import { Cabin } from 'next/font/google';
import styles from '../styles/EventCard.module.css';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';

const cabin = Cabin({ subsets: ['latin'] });

export default function EventCard({ event }) { 
  return (
    <div className={`${styles.eventCard} ${cabin.className}`}>
        <Image src={event.image} alt={event.title} width={512} height={286} className={styles.imageWrapper} layout="intrinsic"/>
        <div className={styles.contentWrapper}>
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
          <Button text="Read More" url="/" type = "black" icon = "null" />
        </div>
    </div>
  );
}
