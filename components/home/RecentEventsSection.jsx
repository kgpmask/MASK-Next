import Image from 'next/image';
import RecentEventsCarouselCard from '@/components/home/RecentEventsCarouselCard';
import Carousel from '@/components/Carousel';
import styles from '@/styles/home/HomePage.module.css';

function RecentEventsSideProp ({ recentEventsSummaries, currentElement, setCurrentElement }) {
	return (
		<div className={styles['recent-events']}>
			<div className={styles['recent-events-content']}>
				<h1>Recent Events</h1>
				<p>
					MASK organizes a handful of anime-related events such as the Open Campus Anime Quiz, Doodle Dojo, Maskerade and some others when possible.
				</p>
			</div>
			{recentEventsSummaries.map((event, idx) =>
				<div
					key={event.title}
					className={
						currentElement === idx
							? styles['active-event']
							: idx === recentEventsSummaries.length - 1 && currentElement > idx
								? styles['last-deactive-element']
								: styles.events
					}
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}
					onClick={() => setCurrentElement(idx)}
				>
					<div style={{
						fontSize: '22px',
						fontWeight: 'bold'
					}}>
						<Image
							alt="calendar"
							src="/assets/icons/calendar.svg"
							height={20}
							width={20}
						/>
						{' '}
						{event.title}
					</div>
					<p>{event.description}</p>
				</div>
			)}
		</div>
	);
}

export default function RecentEventsSection ({ events }) {
	const recentEventsSummaries = (events.length >= 3 ? events.slice(0, 3) : events).map((recentEvent) => ({
		...recentEvent,
		description:
		recentEvent.description.slice(0, 100) +
		(recentEvent.description.length > 100 ? '...' : '')
	}));

	return (
		<>
			<div className={styles['header-content']}>
				<Carousel
					data={events}
					Card={RecentEventsCarouselCard}
					numPerPage={1}
					showNavigator={true}
					SideProp={
						({ ...other }) => <RecentEventsSideProp
							recentEventsSummaries={recentEventsSummaries}
							{...other}
						/>
					}
					showSideProp={true}
					autoscroll={true}
				/>
			</div>
		</>
	);
}
