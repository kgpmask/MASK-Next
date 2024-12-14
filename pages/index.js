import React from "react";
import Image from "next/image";
import EventCard from "../components/EventCard";
import styles from "../styles/Home.module.css";

export default function Home() {
	const sampleEvents = [
		{
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
			'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		},
		{
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
			  'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		  },
		  {
			image: '/assets/events/ocaq.jpg',
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description:
			  'MASK\'s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.',
		  },
	  ];

	return (
		<div className={styles.eventsContainer}>
		{sampleEvents.map((event, index) => (
			<EventCard key={index} event={event} />
		))}
    	</div>
	);
}
