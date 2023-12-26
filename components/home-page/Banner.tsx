import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';



function Banner () {
	const eventAlert = null;
	return (
		<div>
			<div className={styles['mask-banner']}>
				<Image className={styles['mask-banner-image']} src="/transparent_logo.png" alt="MASK" width={120} height={120} />
				<span className={styles['mask-banner-text-container']}>
					<span className={styles['mask-banner-text']}>Manga and Anime Society Kharagpur</span>
				</span>
				<span className={styles['mask-banner-edge']}>&nbsp;</span>
			</div>
			{eventAlert && <div className={styles['event-alert']} style={{ margin: '50px 0px' }}>
				{eventAlert}
			</div>}
		</div>
	);
}

export default Banner;
