import fs from 'fs';
import path from 'path';
import Carousel from '@/components/Carousel';
import styles from '@/styles/NewsletterArticle.module.css';
import { useRouter } from 'next/router';

export async function getStaticProps ({ params }) {

	const { dateSlug } = params;

	const rootDir = path.join(process.cwd(), 'data/newsletters');

	// get all newsletter folders
	const allDates = fs.readdirSync(rootDir).sort();

	// find current index
	const currentDate = allDates.indexOf(dateSlug);

	const prevDate = allDates[currentDate - 1] ?? null;
	const nextDate = allDates[currentDate + 1] ?? null;

	// random (avoid current page)
	const others = allDates.filter(d => d !== dateSlug);
	const randomDate =
    others.length > 0 ? others[Math.floor(Math.random() * others.length)] : null;

	// read articles
	const baseDir = path.join(rootDir, dateSlug);

	const files = fs.readdirSync(baseDir);

	const articles = files.map((file) => {
		const content = fs.readFileSync(path.join(baseDir, file), 'utf-8');

		return {
			html: content
		};
	});

	return {
		props: {
			dateSlug,
			articles,
			prevDate,
			nextDate,
			randomDate
		}
	};
}

export async function getStaticPaths () {
	const baseDir = path.join(process.cwd(), 'data/newsletters');

	const folders = fs.readdirSync(baseDir);

	const paths = folders.map((folder) => ({
		params: { dateSlug: folder }
	}));

	return {
		paths,
		fallback: false
	};
}

const articlepage = ({ dataObj }) => {
	return (
		<div
			className={styles.article}
			style={{
				overflowY: 'scroll'
			}}
			dangerouslySetInnerHTML={{ __html: dataObj.html }}
		/>
	);
};


export default function NewsDatePage ({ dateSlug, articles, prevDate, nextDate, randomDate }) {

	const router = useRouter();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const month = months[parseInt(dateSlug.substring(5, 7), 10) - 1];
	const year = dateSlug.substring(0, 4);
	return (
		<>
			<div
				className={styles['text-content']}
				style={{ padding: '32px 32px 10px 32px' }}
			>
				<h2>{month} {year} Issue</h2>
				<p>Swipe left/right or use arrow keys to scroll.</p>
			</div>
			<Carousel
				data={articles}
				Card={articlepage}
				numPerPage={1}
				showBackground={false}
				showNavigator={false}
				autoscroll={false}
				isNewsletter={true}
			/>
			<div
				className={styles['text-content']}
			>
				<p>Swipe left/right or use arrow keys to scroll.</p>
				<p>Best viewed on Desktop.</p>
			</div>
			<div className={styles['newsletter-nav']}>
				<button
					onClick={() => router.push(`/newsletters/${prevDate}`)}
					disabled={prevDate === null}
				>
                    Previous Newsletter
				</button>
				<button
					onClick={() => router.push(`/newsletters/${randomDate}`)}
				>
                    Random
				</button>
				<button
					onClick={() => router.push(`/newsletters/${nextDate}`)}
					disabled={nextDate === null}
				>
                    Next Newsletter
				</button>
			</div>
		</>
	);
}
