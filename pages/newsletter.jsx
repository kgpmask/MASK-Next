import NewsletterCard from '@/components/NewsletterCard';
import styles from '@/styles/NewsletterPage.module.css';
import newsContent from '@/public/assets/releases/newsletter_desc.json';
import NewsletterCarouselCard from '@/components/NewsletterCarouselCard';
import Carousel from '@/components/Carousel';
import HeroBanner from '@/components/HeroBanner';

const NewsletterCardGallery = ({ newsletterData }) => {
	const handleCustomCardClick = () => {
		console.log('Custom click handler for the card');
	};

	return (
		<div className={styles['container']}>
			<HeroBanner
				heroTitle={'Check out our other Newsletters'}
				heroContent={
					`Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.`
				}
				buttonContent={'Check out our Meduim page'}
				buttonURL={'https://meduim@kgpmask.com'}
			/>
			<div className={styles['card-container']}>
				{newsletterData.map((news, _idx) =>
					<div key={news.id}>
						<NewsletterCard
							image={news.link}
							title={news.title}
							description={news.desc.slice(0, 100) + '...'}
							link={'https://www.animenewsnetwork.com/'}
							onCardClick={handleCustomCardClick}
						/>
					</div>
				)}
			</div>
		</div>
	);
};


export default function NewsletterPage () {

	const newsletterData = newsContent.map(item => ({
		...item,
		src: `/assets/releases/${item.link}/cover.webp`
	}))
		.reverse();

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
