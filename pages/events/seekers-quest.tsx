import Description from '@/components/textpage/Description';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Image from '@/components/textpage/InnerImage';
import Link from '@/components/textpage/InnerLink';
import Emphasis from '@/components/textpage/Emphasis';

export default function EventPage() {
	return (
		<>
			<HeadContent
				title='Anime Seekers&rsquo; Quest'
				description='With nothing but clues, anime knowledge, friendships and wits, search around the campus for the treasure of the fans before the sun goes down. The Anime Seekers&rsquo; Quest was our first hands-on event, covering the campus with our clues and with prizes worth the search.'
			/>
			<TextPage title='Anime Seekers&rsquo; Quest' isRed>
				<Description
					information={{
						Date: 'April 1, 2023',
						Location: '2.2 (around the lake)',
						Author: 'Dio Brando'
					}}
				/>
				<Emphasis marginal isOffWhite>
					Hey, MASK. I know you&rsquo;ve been conducting some quizzes for a while now. It&rsquo;s all good, but I feel like
					something has changed.
					<br />
					I mean, it&rsquo;s kinda boring how we just sit in Vikramshila with our computers, attempting a quiz in a room full
					of people, without really discussing with our friends.
					<br />
					Wouldn&rsquo;t it be better if you did something, I don&rsquo;t know, which I can enjoy with my friends or
					something?
					<br />
					<br />
					&emsp;- Nobody. This narration is fixtional. The next part, not so much.
				</Emphasis>
				<p>
					With this line of thought, we decided that it was time we let go of our online link and proceed with a completely
					offline event for teams. The <b>Anime Seekers&rsquo; Quest</b> was a treasure hunt planned shortly after the{' '}
					<Link href='/events/qatq' title='Quad Anime Trivia Quiz' isOffWhite>
						Quad Anime Trivia Quiz
					</Link>
					. Teams of upto 3 people spent 2 hours, using the clues provided and their anime knowledge (and Google... yes, we
					allowed it. ) around 2.2 covering various locations in a quest to claim their prizes from a treasure curated just
					for the anime fans.
				</p>
				{/* <div class="image-container">
                    <div class="slideshow-container">
                        {{ slide('seekers-quest', '1.jpg') }}
                        {{ slide('seekers-quest', '2.jpg') }}
                        {{ slide('seekers-quest', '3.jpg') }}
                        {{ slide('seekers-quest', '4.jpg') }}
                    </div>
                    <p> Gallery of the winning teams </p>
                </div> */}
				<p>
					With everything going on in the campus, we had a wonderful response from the participants. As the sun went down,
					the event ended as a beautiful success. We would like to congratulate those who won the event:
				</p>
				<ol style={{ padding: '5px calc(min(7vw, 60px))' }}>
					<li>Team STEINS</li>
					<li>Team Dabi</li>
					<li>Team Uchiha Alchemists</li>
					<li>Team Whitebeard</li>
				</ol>
				<Image
					src='/events/seekers-quest/5.jpg'
					alt='The team behind the event'
					caption='The team behind the event. Yo Team!'
				/>
			</TextPage>
			<Link href='/events' isRed>
				Click here
			</Link>{' '}
			to go back
			<br />
			<br />
		</>
	);
}
