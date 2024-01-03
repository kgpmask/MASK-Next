

import React, { useState } from 'react';
import styles from '@/styles/Newsletters.module.css';

interface Props {
    id: number;
    link: string,
    title: string,
    desc: string
}

const LatestCard: React.FC<Props> = ( {
	id,
	link, 
	title, 
	desc
} ) => {

	const [Link, setLink] = useState(`/newsletterReleases/${link}/cover.webp`);
	const handleError = () => 
		setLink ('/newsletterReleases/no-cover.webp');


	return (
		<a className= {`${styles['scale-up-tl']}`} id={styles['latest']} href={`/newsletters/${link}`} >
				
			<div className={styles['newsletter']}>
				<img className={styles['cover']} src={Link}
					onError={handleError}/>
				<div className={styles['desc']}>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
			</div>
		</a>
	);
};

export default LatestCard;
