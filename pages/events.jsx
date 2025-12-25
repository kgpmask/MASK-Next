import React from 'react';
import EventCard from '@/components/EventCard';
import styles from '@/styles/EventCard.module.css';
import events from '@/pages/Events.json';

export default function EventsPage () {
	return (
		<div className={styles.eventCardContainer}>

			{Object.values(events).map((event, index) => {
				return (
					<EventCard
						key = {index}
						event={event}
					/>
				);
			})}

		</div>
	);
}
