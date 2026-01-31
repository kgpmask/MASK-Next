import fs from 'fs';
import path from 'path';
import styles from '@/styles/NewsletterArticle.module.css';
import { useRouter } from 'next/router';

export async function getStaticPaths () {
	const baseDir = path.join(process.cwd(), 'data/events');
	const files = fs.readdirSync(baseDir);
	const slugs = files
		.filter((file) => file.endsWith('.html'))
		.map((file) => file.replace(/\.html$/, ''));

	const paths = slugs.map((slug) => ({
		params: { slug }
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps ({ params }) {
	const { slug } = params;
	const rootDir = path.join(process.cwd(), 'data/events');

	const files = fs.readdirSync(rootDir);
	const allSlugs = files
		.filter((file) => file.endsWith('.html'))
		.map((file) => file.replace(/\.html$/, ''))
		.sort();

	const currentIndex = allSlugs.indexOf(slug);
	const prevSlug = allSlugs[currentIndex - 1] ?? null;
	const nextSlug = allSlugs[currentIndex + 1] ?? null;

	const others = allSlugs.filter((s) => s !== slug);
	const randomSlug =
		others.length > 0 ? others[Math.floor(Math.random() * others.length)] : null;

	const filePath = path.join(rootDir, `${slug}.html`);
	const html = fs.readFileSync(filePath, 'utf-8');

	const titleMatch = html.match(/pagetitle\s*=\s*['"]([^'"]+)['"]/);
	const title = titleMatch
		? titleMatch[1]
		: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

	return {
		props: {
			slug,
			title,
			html,
			prevSlug,
			nextSlug,
			randomSlug
		}
	};
}

export default function EventPage ({ slug, title, html, prevSlug, nextSlug, randomSlug }) {
	const router = useRouter();

	return (
		<>
			<div
				className={styles['text-content']}
				style={{ padding: '32px 32px 10px 32px' }}
			>
				<h2>{title}</h2>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div
					className={styles.article}
					style={{
						overflowY: 'scroll'
					}}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
			<div className={styles['newsletter-nav']}>
				<button
					onClick={() => router.push(`/events/${prevSlug}`)}
					disabled={prevSlug === null}
				>
					Previous Event
				</button>
				<button
					onClick={() => router.push(`/events/${randomSlug}`)}
					disabled={randomSlug === null}
				>
					Random
				</button>
				<button
					onClick={() => router.push(`/events/${nextSlug}`)}
					disabled={nextSlug === null}
				>
					Next Event
				</button>
			</div>
		</>
	);
}
