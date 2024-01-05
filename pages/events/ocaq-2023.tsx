import Description from '@/components/textpage/Description';
import HeadContent from '@/components/HeadContent';
import TextPage from '@/components/TextPage';
import Image from '@/components/textpage/InnerImage';
import Link from '@/components/textpage/InnerLink';
import Emphasis from '@/components/textpage/Emphasis';

export default function EventPage () {
	return (
		<>
			<HeadContent
				title='Open Campus Anime Quiz 2023'
				description='MASK&rsquo;s Open Campus Anime Quiz was back, and it did not disappoint! The atmosphere crackled with energy as questions flew back and forth, with each answer met by cheers and groans.'
			/>
			<TextPage title='Open Campus Anime Quiz 2023' isRed>
				<Description
					information={{
						Date: 'September 03, 2023',
						Location: 'Raman Auditorium, Main Building',
						Author: 'NPC'
					}}
				/>

				<p>
					{' '}
					In the middle of a hectic semester, our Open Campus Anime Quiz was a welcome change of pace, injecting fun and
					excitement into the lives of students. Careful planning met with enthusiastic participation, creating an atmosphere
					filled with energy and passion. It became an unforgettable event that left everyone buzzing with excitement!{' '}
				</p>
				<Image src='/events/ocaq-2023/5.webp' alt='Crowd at Raman Auditorium' />

				<h2> Motivation for the event: </h2>
				<p>
					{' '}
					The success of the first offline event of MASK, Open Campus Anime Quiz 2022-23, led to the early planning of this
					event. We began working on questions and performances even before the semester began.{' '}
				</p>

				<h2> Conduction: </h2>
				<p>
					{' '}
					On the eagerly anticipated day of September 3rd, 2023, our journey at Raman Auditorium began, and so did the
					arrival of our enthusiastic audience. The vibrant event kicked off with our dynamic hosts, Sahil and Soumil,
					setting the stage, while Aman and Hardik took charge of the quiz, peppering the atmosphere with intriguing trivia
					questions. The audience&rsquo;s energy was contagious, making the first round a delightful experience. And just
					like that, the second round arrived, masterfully hosted by Dishant and Vipin, where anime characters were unveiled
					through clever hints, adding an exciting twist to the evening.{' '}
				</p>

				<p>
					{' '}
					But the excitement didn&rsquo;t stop there! In between the rounds, we treated our audience to a mesmerising break
					filled with sensational performances, featuring iconic tracks from the anime universe. Arhana and Shreya enchanted
					us with the soul-stirring melody of{' '}
					<a href='https://kimetsu-no-yaiba.fandom.com/wiki/Gurenge'>&ldquo;Gurenge&rdquo;</a> from Demon Slayer, followed by
					Ashish&rsquo;s rendition of <a href='https://jojo.fandom.com/wiki/The_World'>&ldquo;The World&rdquo;</a> from Death
					Note. Arhana then captivated hearts with{' '}
					<a href='https://onepiece.fandom.com/wiki/Binks%27_Sake'>&ldquo;Binks no Sake&rdquo;</a> from One Piece, and the
					crowd was transported to the world of Naruto with the enchanting{' '}
					<a href='https://naruto.fandom.com/wiki/Blue_Bird'>&ldquo;Blue Bird&rdquo;</a> performance.{' '}
				</p>
				<Image src='/events/ocaq-2023/3.webp' alt='Duet' />

				<p>
					{' '}
					After the break, the microphone was passed to Nishkal and Saroja, leading us into the thrilling &ldquo;Guess the
					anime&rdquo; phase. The anticipation only grew as our anchors unveiled the upcoming rounds: challenging scenes,
					memory quizzes, and music-based questions that promised to keep everyone on their toes.{' '}
				</p>
				<Image src='/events/ocaq-2023/2.webp' alt='Guess the anime' caption='Can you guess the anime from the image?' />

				<p>
					{' '}
					Oh, and let&rsquo;s not forget the second break! It brought us unforgettable musical moments, with Shreya&rsquo;s
					soulful rendition of{' '}
					<a href='https://aobuta.fandom.com/wiki/Fukashigi_no_Karte'>&ldquo;Fukashigi no Karte&rdquo;</a>, Bhavesh&rsquo;s
					electrifying performance of{' '}
					<a href='https://weatheringwithyou.fandom.com/wiki/Is_There_Still_Anything_That_Love_Can_Do%3F'>
						&ldquo;Is there still anything that love can do?&rdquo;
					</a>
					, Suvojit&rsquo;s mesmerising take on{' '}
					<a href='https://kiminonawa.fandom.com/wiki/Sparkle'>&ldquo;Sparkle&rdquo;</a>, and the showstopper of the night,
					Jai, who left the audience in awe with a powerful performance of{' '}
					<a href='https://studio-bolt.fandom.com/wiki/Shinzou_wo_Sasageyo'>&ldquo;Shinzou wo Sasageyo&rdquo;</a>. The room
					pulsated with energy, as the crowd joined in, dedicating their hearts just like the brave soldiers on screen.{' '}
				</p>
				<Image src='/events/ocaq-2023/1.webp' alt='Guitar Performance' />

				<p>
					{' '}
					At the end of the event, we announced the highly anticipated results, and then came the fun part: the prize
					distribution ceremony! Everyone was excited to see who had won, and the winners were thrilled to receive their
					prizes. Some people chose waifu posters, while others preferred posters with epic fight scenes.{' '}
				</p>
				<Image src='/events/ocaq-2023/6.webp' alt='Prizes for the winners' caption='The winners with their prizes.' />
				<Image src='/events/ocaq-2023/4.webp' alt='Group Photo' caption='Yo MASK' />
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
