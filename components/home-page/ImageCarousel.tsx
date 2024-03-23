import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ImageCarousel.module.css';
import Carousel from '@/components/home-page/Carousels';

interface ImageCarouselProps {
  imgs: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ( { imgs } ) => {
	if (imgs.length === 0) {
		return null;
	}

	return (
		<Carousel height={540} width={720}>
			{imgs.map((img, index) => 
				<Image
					key={index}
					src={img}
					alt={`carousel-image-${index}`}
					width={500}
					height={500}
					style={{ transform: 'translateX(22.5%)', objectFit: 'cover' }}
				/>
			)}
		</Carousel>
	);
};

export default ImageCarousel;
