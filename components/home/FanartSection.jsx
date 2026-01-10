import styles from '@/styles/home/Home.module.css';
import recentContent from '@/data/recentEvents.json';
import Carousel from '@/components/Carousel';
import Button from '../Button';
import Image from 'next/image';

const fanartItems = recentContent.slice(0, 5);

function FanArtSideProp () {
	return (
		<div className={styles['text-content']} style={{ width: 400, color: 'white' }}>
			<h1>
				<strong>Fanart</strong> Submissions
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<Button text="Our Artwork" href={'#'} color="black" />
		</div>
	);
}

const FanArtCarouselCard = ({ dataObj }) => {
	return (
		<Image
			draggable={false}
			src={dataObj.src}
			width={600}
			height={400}
			style={{
				objectFit: 'cover',
				paddingBottom: 20
			}}
			alt="event poster"
		/>
	);
};

export default function FanartSection () {
	return (
		<div className={styles['fanart']}>
			<Carousel
				data={fanartItems}
				Card={FanArtCarouselCard}
				numPerPage={1}
				showNavigator={true}
				SideProp={FanArtSideProp}
				showSideProp={true}
				sidePropVertical={false}
				showBackground={true}
				autoscroll={true}
			/>
		</div>
	);
}
