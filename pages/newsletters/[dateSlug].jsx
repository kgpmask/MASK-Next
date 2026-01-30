import fs from 'fs';
import path from 'path';
import Carousel from '@/components/Carousel';
import styles from '@/styles/NewsletterArticle.module.css';

export async function getStaticProps ({ params }) {
	const { dateSlug } = params;

	const baseDir = path.join(process.cwd(), 'data/newsletters', dateSlug);

	const files = fs.readdirSync(baseDir);

	const articles = files.map((file) => {
		const slug = file.replace('.html', '');
		const content = fs.readFileSync(path.join(baseDir, file), 'utf-8');

		return {
			slug,
			html: content
		};
	});

	return {
		props: {
			dateSlug,
			articles
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


export default function NewsDatePage ({ dateSlug, articles }) {
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
				style={{ padding: '0px 0px 50px 0px' }}
			>
				<p>Swipe left/right or use arrow keys to scroll.</p>
				<p>Best viewed on Desktop.</p>
			</div>
		</>
	);
}
