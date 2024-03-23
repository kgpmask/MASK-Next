import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from '@/styles/VideoCarousel.module.css';
import Carousel from '@/components/home-page/Carousels';

interface Video {
  id: string;
  name: string;
}

interface VideosCarouselProps {
  videos: Video[];
}

const VideosCarousel: React.FC<VideosCarouselProps> = ( { videos } ) => {
	if (videos.length === 0) {
		return null;
	}

	return (
		<Carousel height={540} width={720}>
			{videos.map((video, index) => 
				<LiteYouTubeEmbed
					key={index}
					id={video.id}
					title={video.name}
					wrapperClass={styles['youtube-vid'] + ' yt-lite'}
					containerElement='div'
					webp={true}
				/>
			)}
		</Carousel>
	);
};

export default VideosCarousel;
