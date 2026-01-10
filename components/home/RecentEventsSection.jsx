import { useState } from 'react';
import Image from 'next/image';
import RecentEventsCarousel from '@/components/home/RecentEventsCarousel';
import RecentEventsCarouselCard from '@/components/home/RecentEventsCarouselCard';
import Carousel from '@/components/Carousel';
import recentContent from '@/data/recentEvents.json';
import styles from '@/styles/home/Home.module.css';

const recentEvents = recentContent.slice(0, 5);
const recentEventsSummaries = recentEvents.slice(0, 3).map((recentEvent) => ({
	...recentEvent,
	description:
    recentEvent.description.slice(0, 100) +
    (recentEvent.description.length > 100 ? '...' : '')
}));

function RecentEventsSideProp ({ currentElement, setCurrentElement }) {
	return (
		<div className={styles['recent-events']}>
			<div className={styles['recent-events-content']}>
				<h2>Recent Events</h2>
				<p>
				Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
				primis nisi imperdiet adipiscing facqdilisis enim sociosqu.
				</p>
			</div>
			{recentEventsSummaries.map((event, idx) =>
				<div
					key={event.title}
					className={
						currentElement === idx
							? styles['active-event']
							: idx === recentEventsSummaries.length - 1 &&
								currentElement > idx
								? styles['last-deactive-element']
								: styles.events
					}
					onClick={() => setCurrentElement(idx)}
				>
					<div>
						<Image
							alt="calendar"
							src="/assets/icons/calendar.svg"
							height={30}
							width={30}
						/>
					</div>
					<h2>{event.title}</h2>
					<p>{event.description}</p>
				</div>
			)}
		</div>
	);
}

export default function RecentEventsSection () {
	const [currentElement, setCurrentElement] = useState(0);
	return (
		<>
			{/* <RecentEventsSideProp /> */}
			<div className={styles['header-content']}>
				{/* <RecentEventsCarousel
					Template={RecentEventsCarouselCard}
					numPerPage={1}
					discrete={false}
					data={recentEvents}
					onSlideChange={setCurrentElement}
					currentElement={currentElement}
				/> */}
				<Carousel
					data={recentEvents}
					Card={RecentEventsCarouselCard}
					numPerPage={1}
					showNavigator={true}
					SideProp={RecentEventsSideProp}
					showSideProp={true}
					autoscroll={true}
				/>
			</div>
		</>
	);
}
