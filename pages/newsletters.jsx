import NewsletterCard from '@/components/NewsletterCard';
import styles from '@/styles/NewsletterPage.module.css';
import newsContent from '@/data/newsletter_desc.json';
import NewsletterCarouselCard from '@/components/NewsletterCarouselCard';
import Carousel from '@/components/Carousel';
import HeroBanner from '@/components/HeroBanner';

const NewsletterCardGallery = ({ newsletterData }) => {
	return (
		<div className={styles['container']}>
			<HeroBanner
				heroTitle={'Check out our other Newsletters'}
				buttonContent={'Check out our Meduim page'}
				buttonURL={'https://mask-iitkgp.medium.com'}
			/>
			<div className={styles['card-container']}>
				{newsletterData.map((news, _idx) =>
					<NewsletterCard
						key={news.link}
						image={news.link}
						title={news.title}
						link={news.link}
						description={news.desc}
					/>
				)}
			</div>
		</div>
	);
};


export default function NewsletterPage () {

	const newsletterData = newsContent.map(item => ({
		...item,
		src: `/assets/releases/${item.link}/cover.webp`
	})).reverse();

	return (
		<>
			<Carousel
				data={newsletterData}
				Card={NewsletterCarouselCard}
				numPerPage={1}
				showBackground={true}
				showNavigator={false}
				autoscroll={true}
			/>
			<NewsletterCardGallery
				newsletterData={newsletterData}
			/>
		</>
	);
}
