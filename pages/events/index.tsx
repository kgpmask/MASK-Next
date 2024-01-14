import { useEffect } from 'react';
import EventContainer from '@/components/EventContainer';

export default function EventPage () {
	useEffect(() => {
		[...document.querySelector('#events').children].filter((_, i) => i % 2).forEach((eventContainer) => {
			(eventContainer as HTMLElement).style.setProperty('flex-direction', 'row-reverse');
		} );
  
		(document.querySelector('#loading') as HTMLElement).style.setProperty('display', 'none');
		(document.querySelector('#events') as HTMLElement).style.removeProperty('display');
	}, []);
  
	return (
		<>
			<div id="events" style={{ display: 'none' }}>
				<h1>Events</h1>
				<EventContainer
					title="Open Campus Anime Quiz"
					date="September 3, 2023"
					venue="Raman Auditorium, Main Building"
					author="NPC"
					description="MASK's Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans."
					link="ocaq-2023"
				/>
		
			</div>
		</>
	);
};
	
  
