import React from 'react';
import Image from 'next/image';
// import styles from '@/styles/ImageCarousel.module.css';
import Carousel from '@/components/home-page/Carousels';

interface ImageCarouselProps {
  imgs: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ( { imgs } ) => {
	if (imgs.length === 0) {
		return null;
	}

	return (
		<Carousel>
			{imgs.map((img, index) => 
				<Image
					key={index}
					src={img}
					alt={`carousel-image-${index}`}
					width={500}
					height={300}
				/>
			)}
		</Carousel>
	);
};

export default ImageCarousel;
