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
				title='Quad Anime Trivia Quiz'
				description='Anime enthusiasts from diverse fandoms recently united for an electrifying quiz event, showcasing their knowledge and competing for exclusive merch and enticing prizes. Relive the excitement of this unforgettable celebration, where fans celebrated their shared love for anime in a thrilling clash of wits and passion.'
			/>
			<TextPage title='Quad Anime Trivia Quiz' isRed>
				<Description
					information={{
						Date: 'March 12, 2023',
						Location: 'V4, Vikramshila',
						Author: 'Ayush Parmar'
					}}
				/>
				<p>
					After the end of meticulous mid-semester exams for the seniors and the first semester of their college lives for
					the freshmen, our society decided to start things off in the spring semester with a quiz event in March bringing
					fans from four different fandoms together- namely the power-packed One Punch Man, the heroic My Hero Academia, the
					epic Naruto, and the thrilling Attack on Titan.
				</p>
				<p>
					Participants eagerly engaged their minds, furiously tapping on their devices in pursuit of the ultimate reward:
					coveted merch t-shirts adorned with the emblems of their favorite anime, accompanied by a treasure trove of
					enticing goodies. In a comical twist of fate, the first prize winners turned out to be students from different
					academic years.
				</p>
				<br />
				{/* <div className="image-container">
	            	<div className="slideshow-container">
	            		{{ slide('qatq', '4.jpg') }}
	            		{{ slide('qatq', '1.jpg') }}
	            		{{ slide('qatq', '2.jpg') }}
	            		{{ slide('qatq', '3.jpg') }}
	            	</div>
	            	<p> Here are some images from the event </p>
	            </div> */}
				<br />
				<p>
					Despite the last-minute venue changes and technical challenges, the organizers embraced their inner anime heroes,
					overcoming obstacles with unwavering enthusiasm. The event buzzed with a vibrant atmosphere as participants
					showcased their knowledge of beloved anime worlds. This experience has taught us valuable lessons, and we are
					committed to improving future events for everyone&rsquo; enjoyment. Together, let&rsquo; continue to celebrate the
					magic of anime and look forward to the next chapter of our shared journey.
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
