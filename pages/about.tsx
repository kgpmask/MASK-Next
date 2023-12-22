import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Emphasis from '@/components/textpage/Emphasis';
import Link from '@/components/textpage/InnerLink';

import styles from '@/styles/About.module.css';

export default function About() {
	return (
		<>
			<HeadContent
				title='About Us'
				description="Here's all you need to know about us, the Manga and Anime Society Kharagpur."
				keywords={['About Us', 'Our Society', 'About', 'Teams', 'History']}
			/>
			<TextPage title='Manga and Anime Society Kharagpur'>
				<Emphasis isRed big center>
					{' '}
					Konnichiwa minna-san!!! We are Manga and Anime Society Kharagpur (MASK).{' '}
				</Emphasis>
				<h2> What is MASK? </h2>
				<p>We are a society of enthusiastic otakus with a keen interest in anime, mangas, manhwas and more.</p>
				<br />
				<h2> What do we do over here? </h2>
				<p>
					At MASK, we involve ourselves in a variety of things. We regularly release anime-related content such as{' '}
					<Link isRed href='/newsletters'>
						newsletters
					</Link>
					,{' '}
					<Link isRed href='/videos'>
						AMVs
					</Link>
					,{' '}
					<Link isRed href='/Linkrt'>
						fan arts
					</Link>{' '}
					etc. We also hold{' '}
					<Link isRed href='/events'>
						events
					</Link>{' '}
					for fellow anime enthusiasts on and around the campus. Except them, we also have some activites exclusive for the
					members of the society. (Join us to enjoy some insider benefits.)
				</p>
				<br />
				<p>
					We also accept fan art and AMVs from outside society and publish them on social media while featuring the creator.
					If you want to make any AMV/ fanart submissions, you can do it{' '}
					<Link isRed href='/submissions'>
						here
					</Link>
					.
				</p>
				<br />
				<h2> Teams </h2>
				<p>We have five teams which are responsible for various aspects of our society.</p>
				<br />
				<div id={styles['teams-container']}>
					<div className={styles['team-border']}>
						<h4>AMV Team</h4>
						<p>
							The AMV Team works on making AMVs (Anime Music Videos), be it full-fledged 3-minute long videos or small
							30-second shorts or reels. They also work on making the promotional videos of the events as well as live
							coverage videos.
						</p>
					</div>
					<div className={styles['team-border']}>
						<h4>Design and Arts Team</h4>
						<p>
							The Design and Arts team is involved in making fan arts, be it traditional or digital. They also work on
							making the designs of the posters, merchandise and even the website.
						</p>
					</div>
					<div className={styles['team-border']}>
						<h4>Media and Newsletter Team</h4>
						<p>
							Just like the name suggests, the Media and Newsletter team is in charge of handling our social media and
							responsible for releasing newsletters. Check them out for interesting articles and puzzles.
						</p>
					</div>
					<div className={styles['team-border']}>
						<h4>Quiz Team</h4>
						<p>
							The Quiz team works on making engaging anime quizzes and puzzles for various events, competition and
							newsletter. They also work on handling the schematics of the event.
						</p>
					</div>
					<div className={styles['team-border']}>
						<h4>Web Development Team</h4>
						<p>
							WebDev team ensures the smooth digital experiences, managing our website and making it easy for everyone to
							connect.
						</p>
					</div>
				</div>
				<p>
					More often than not, multiple teams collaborate together to work on cross-team projects or even full-fledged{' '}
					<Link isRed href='/events'>
						events
					</Link>
					.
				</p>
				<br />
			</TextPage>
		</>
	);
}
