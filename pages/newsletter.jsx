import NewsletterCard from '@/components/newsletter/NewsCard';
import styles from '@/styles/newsletter/News.module.css';
import newsContent from '@/data/news.json';
import NewsCarousel from '@/components/newsletter/NewsCarousel';
import NewsCarouselCard from '@/components/newsletter/NewsCarouselCard';
import { useState } from 'react';

const NewsletterCardGallery = () => {
	const handleCustomCardClick = () => {
		console.log('Custom click handler for the card');
	};

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p>
          Check out our other <strong>Newsletters</strong>
				</p>
			</div>
			<div className={styles.subheading}>
				<p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className={styles.grid}>
				{newsContent.map((news, idx) =>
					<div key={news.id}>
						<NewsletterCard
							image={news.src}
							title={news.title}
							description={news.description.slice(0, 100) + '...'}
							link={news.link}
							onCardClick={handleCustomCardClick}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

function NewsHeaderCarousel () {
	const newsItems = newsContent.slice(0, 5);
	const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

	return (
		<>
			<header
				className={styles['header']}
				style={{
					backgroundImage: `linear-gradient(#e43332d9, #e43332d9), url('${
						newsItems[currentNewsIndex]?.src || '/assets/news/header.png'
					}')`
				}}
			>
				<div className={styles['header-content']}>
					<NewsCarousel
						Template={NewsCarouselCard}
						showNavigator={true}
						numPerPage={1}
						discrete={false}
						data={newsItems}
						maxWidth={'65vw'}
						onSlideChange={setCurrentNewsIndex}
					/>
				</div>
			</header>
		</>
	);
}

export default function NewsletterPage () {
	return (
		<>
			<NewsHeaderCarousel />
			<NewsletterCardGallery />
		</>
	);
}
