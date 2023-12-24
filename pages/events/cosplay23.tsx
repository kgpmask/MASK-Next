import Description from '@/components/textpage/Description';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Image from '@/components/textpage/InnerImage';
import Link from '@/components/textpage/InnerLink';
import Emphasis from '@/components/textpage/Emphasis';

export default function EventPage() {
	return (
		<>
			<HeadContent title='' />
			<TextPage title='' isRed>
				<Description
					information={{
						Date: 'April 18, 2023',
						Location: 'In front of Main Academic Building, IIT Kharagpur',
						Attendance: '1000+',
						Cosplayers: 'Over 100',
						Costumes:
							'A wide variety of costumes from anime, manga, video games, traditional deities/heroes, and other pop culture media',
						Activities: 'Meet-and-Greets with cosplayers (the graduating students)',
						Author: 'Nishkal Prakash'
					}}
				/>
				<h2>Overall Impression: </h2>
				<p>
					The Cosplay&rsquo;23 was a huge success.
					<br />
					The event was well-attended.
					<br />
					The cosplayers were very talented.
					<br />
					The costumes were amazing.
					<br />
					The atmosphere was electric.
					<br />
				</p>
				{/* <div className="image-container">
	            	<div className="slideshow-container">
	            		{{ slide('cosplay23', 'ash_pika.jpg') }}
	            		{# {{ slide('cosplay23', 'goku.jpg') }} #}
	            		{{ slide('cosplay23', 'kitagawa.jpg') }}
	            		{{ slide('cosplay23', 'levi.jpg') }}
	            		{{ slide('cosplay23', 'luffy1.jpg') }}
	            		{{ slide('cosplay23', 'luffy2.jpg') }}
	            		{{ slide('cosplay23', 'luffy3.jpg') }}
	            		{{ slide('cosplay23', 'naruto.jpg') }}
	            		{{ slide('cosplay23', 'taki_mitsuha.jpg') }}
	            		{{ slide('cosplay23', 'tanjiro.jpg') }}
	            		{{ slide('cosplay23', 'yor_forger.jpg') }}
	            	</div>
	            	<p> Here are some cosplayers from that fabulous evening. </p>
	            </div> */}
				<h2>Highlights:</h2>
				<p>
					The cosplayers themselves were the highlight of the event. Cosplayers could be spotted, and attendees were glad to
					have their pictures taken with their favourite characters. Fans were excited to meet their favourite characters in
					person. The overall atmosphere of the event was very positive. Everyone was having a great time, and there was a
					lot of excitement in the air. The event was a great way for anime, manga, and video game fans to come together and
					celebr/ate their love of their hobbies.
				</p>
				<p>
					MASK was on the scene to interview characters from anime and manga by using a special device that allowed them to
					travel to the world of the characters. Once they arrived in the world of the characters, they interviewed them and
					learn more about their lives and their stories. The team was able to interview various characters, including Luffy,
					Tanjiro, Ash & Pikachu, another Luffy, Naruto, Levi, yet another Luffy and many others. The interviews were a great
					way for fans of anime and manga to learn more about their favourite characters and to get a glimpse into their
					lives.
				</p>
				<p>
					Here are the questions that MASK asked the characters: <br />
				</p>
				<ol style={{ padding: '5px calc(min(7vw, 60px))' }}>
					<li>Please introduce yourself and your character in character.</li>
					<li>
						What do you like the most about your character? Something that makes them unique. What made you cosplay them?
					</li>
					<li>
						One underrated anime you think our viewers should watch. An anime you recommend those to watch who are just
						starting out on your anime journey.{' '}
					</li>
					<li>If your character was a professor, which subject would they teach? </li>
					<li>
						How has watching anime influenced your college life? What&rsquo;s your favourite memory of your college years?{' '}
					</li>
					<li>A word of advice for the KGP junta and your juniors. </li>
					<li>If you had to give an anime title to your college life, what would it be? </li>
				</ol>
				<p>
					The characters were all very open and honest in their interviews. They shared their hopes, dreams, and fears. They
					also talked about the challenges they faced and how they overcame them. The interviews were a great way for fans to
					connect with the characters on a personal level.
				</p>
				<p>
					MASK was able to interview a wide variety of characters from various anime and manga series. This allowed fans to
					learn more about their favourite characters and to get a glimpse into their lives. The interviews were a great
					success.
				</p>
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
