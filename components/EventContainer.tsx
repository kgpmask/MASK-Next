import React, { CSSProperties } from 'react';
import styles from '../styles/Events.module.css';

interface EventProps {
	title: string;
	date: string;
	venue: string;
	author: string;
	description: string;
	link: string;
	style?: CSSProperties
}

const EventContainer: React.FC<EventProps> = ( { title, date, venue, author, description, link, style } ) => {
	return <>
		<div className={styles['event-container']} style={ style }>
			<a href={`/events/${ link}`} title={ title }>
				<div className={styles['image-container']}>
					<img src={`/events/${ link }.jpg`} alt={ title} />
				</div>
			</a>
			<div className={styles['details']}>
				<h2> <a href={`/events/${ link}`} title={ title }>{ title } </a></h2>
				<p>
					<span> Date: </span> { date } <br/>
					<span> Venue: </span> { venue } <br/>
					<span> Author: </span> { author }
				</p>
				<p> { description } </p>
				<br/>
				<a href={`/events/${ link}`} title={ title }> Read More... </a>
			</div>
		</div>
	</>; 
};

export default EventContainer;
