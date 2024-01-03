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
				title='Suzume no Tojimari Trip'
				description={
					`How far would you go to watch a movie with the gang? Answer: At least Kolkata.${
						'\n'
					}To watch the new Makoto Shinkai movie, Suzume no Tojimari, we went to South City Mall.${
						''
					} From toto races, early sunday morning trains, bus rides full of jokes, and a wonderful${
						''
					} cinematic experience, this trip was our last big thing for this semester.`
				}
			/>
			<TextPage title='Suzume no Tojimari Trip' isRed>
				<Description
					information={{
						Date: 'April 30, 2023',
						Location: 'South City Mall, Kolkata',
						Author: 'Dio Brando'
					}}
				/>

				<p>
					After working on events and the intro video shoot for the whole month of March, we felt it was finally time to just
					relax and enjoy ourselves instead of working on something. Thanks to Makoto Shinkai sensei, we had the perfect
					thing to spend a weekend on—an anime movie in the theatre and not just on a computer screen. However, due to the
					endsems, the plan was pushed back to the end of the month <span style={{ display: 'inline-block' }}> T-T </span>.
					<br />
				</p>
				<br />
				<Emphasis marginal isOffWhite>
					Meanwhile, in the examination rooms as we opened our question papers, only one thing rang in our ears: <br />
					&emsp;<b>Omae wa mo shindeiru!</b>
				</Emphasis>
				<p>
					After the exams ended, after spending the evening{' '}
					<Link href='/events/cosplay23' title='Cosplay Event 2023' isOffWhite>
						interviewing cosplayers
					</Link>
					, participating in an{' '}
					<Link href='/events/intrasoc' title='Intra-Soc Anime Quiz Extravaganza' isOffWhite>
						intra soc quiz
					</Link>
					and resting for a day, we finally left for Kolkata at 7 in the morning. Taking the Steel Express at 8, we spent the
					next few hours in the train either napping (I mean, who wakes at 7 in the morning on a Sunday of all days?) or
					playing dumb charades, which turned out to be a goldmine for inside jokes.
				</p>

				<Image
					src='/events/suzume/1.jpg'
					alt='Minutes before boarding train'
					caption='Minutes before boarding train (no disasters yet)'
				/>

				<p>
					After reaching Howrah, we took a bus and joined a few guys who chose to meet us directly at South City Mall. (Why
					didn&apos;t you come with us? <span style={{ display: 'inline-block' }}> T-T </span> ... <i>ahem</i>) After having
					lunch (or rather, brunch for quite a few of us), it was time to watch Suzume. Air-conditioned room, comfy seats,
					and a cup of cold drink-what&apos;s a better way to watch a movie in a scorching summer?
				</p>

				<Image
					src='/events/suzume/3.jpg'
					alt='Group photo inside the mall'
					caption="Well that was a great movie, wasn't it, folks?"
				/>

				<p>
					After the movie, we spent an hour looking at the mangas in the book store at the mall, (even purchasing them) and
					we slowly parted ways, be it back to the campus, home in Kolkata, or directly back to hometown. All in all, it was
					a rather unforgettable experience filled with inside jokes, dumb ways to make dumb charades dumber, WhatsApp
					sticker content, and a story we will remember for the rest of our lives.
					<br />
					<i>I wonder if we can make an anime movie or a short series on this...</i>
					<br />
				</p>
				<Image src='/events/suzume/4.jpg' alt='Group photo outside the mall' caption='Sayonara South City Inox' />

				<Emphasis marginal isOffWhite>
					Bonus content:
					<br />
					&emsp;Those who chose to go back to the campus had their own adventure, but that&apos;s a story just for us (maybe
					you&apos;ll find out if you join MASK)
				</Emphasis>
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
