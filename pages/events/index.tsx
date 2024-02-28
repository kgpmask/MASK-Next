import EventContainer from '@/components/EventContainer';

export default function EventPage () {
	const events = [
		{
			title: 'Open Campus Anime Quiz',
			date: 'September 3, 2023',
			venue: 'Raman Auditorium, Main Building',
			author: 'NPC',
			description: "MASK's Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.",
			link: 'ocaq-2023'
		},
		{
			title: 'One Piece: Gear 5 Screening',
			date: 'August 3, 2023',
			venue: 'Netaji Auditorium, Main Building',
			author: 'Nishkal Prakash',
			description: "Ore wa Monkey D.Luffy! Kaizokuō ni naru otoko da!!</b><br> With the hype of Luffy's latest transformation (Gear 5) breaking the internet and causing fans all over to go crazy over it, how could we not screen it in our institute? This article covers the story of how the screening went.",
			link: 'gear-5-screening'
		},
		{
			title: 'Suzume no Tojimari Trip',
			date: 'April 30, 2023',
			venue: 'South City Mall, Kolkata',
			author: 'Dio Brando',
			description: 'How far would you go to watch a movie with the gang? Answer: At least Kolkata.<br> To watch the new Makoto Shinkai movie, Suzume no Tojimari, we went to South City Mall. From toto races, early sunday morning trains, bus rides full of jokes, and a wonderful cinematic experience, this trip was our last big thing for this semester.',
			link: 'suzume'
		},
		{
			title: 'Intra-Soc Anime Quiz Extravaganza',
			date: 'April 28, 2023',
			venue: 'Classified',
			author: 'Gargi Raj',
			description: 'The Intra-Society Anime Quiz was an EPIC showdown, and the results? Mind-blowing!<br> From jaw-dropping trivia to intense battles of otaku knowledge, we witnessed friendships forged and rivalries born!',
			link: 'intrasoc'
		},
		{
			title: 'Cosplay 2023 Coverage',
			date: 'April 28, 2023',
			venue: 'In front of Main Building',
			author: 'Nishkal Prakash',
			description: 'The memories of college life condensed over long years, come to an explosive close, with the graduating batch cosplaying as their favourite characters.',
			link: 'cosplay23'

		},
		{
			title: 'Anime Seekers’ Quest',
			date: 'April 1, 2023',
			venue: '2.2 (around the lake)',
			author: 'Dio Brando',
			description: 'With nothing but clues, anime knowledge, friendships and wits, search around the campus for the treasure of the fans before the sun goes down. The Anime Seekers’ Quest was our first hands-on event, covering the campus with our clues and with prizes worth the search.',
			link: 'seekers-quest'

		},
		{
			title: 'Quad Anime Trivia Quiz',
			date: 'March 12, 2023',
			venue: 'V3, Vikramshila',
			author: 'Ayush Parmar',
			description: 'Anime enthusiasts from diverse fandoms recently united for an electrifying quiz event, showcasing their knowledge and competing for exclusive merch and enticing prizes. Relive the excitement of this unforgettable celebration, where fans celebrated their shared love for anime in a thrilling clash of wits and passion.',
			link: 'qatq'

		}
	];

	return (
		<>
			<div id="events">
				<h1>Events</h1>
				{events.map((e, index) =>
					<div key={index} className={index % 2 === 0 ? 'event-left' : 'event-right'}
						style={{
							flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
						}}>
						<EventContainer
							title={e.title}
							date={e.date}
							venue={e.venue}
							author={e.author}
							description={e.description}
							link={e.link}
						/>
              
              
					</div>
				)
				}
			</div>
		</>
	);
};
