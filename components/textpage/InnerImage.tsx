import Image from 'next/image';
import { CSSProperties } from 'react';

import styles from '@/styles/TextPage.module.css';

interface InnerImageProps {
	src: string;
	alt?: string;
	containerStyle?: CSSProperties;
	imageStyle?: CSSProperties;
	caption?: string;
}

const InnerImage: React.FC<InnerImageProps> = ( { src, alt, caption, containerStyle, imageStyle } ) => {
	return (
		<div
			className={styles['image-container']}
			style={{
				...containerStyle
			}}
		>
			<Image src={src} alt={alt || ''} style={{ ...imageStyle }} width={1000} height={1000} />
			{caption && <p>{caption}</p>}
		</div>
	);
};

export default InnerImage;
