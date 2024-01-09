import HeadContent from '@/components/HeadContent';
import styles from '@/styles/Newsletters.module.css';
import newsletters from '@/utils/data/newsletters';
import React from 'react';
import Card from '@/components/newsletter/Card';
import LatestCard from '@/components/newsletter/LatestCard';

export default function NewslettersPage () {
	return (
		<>
			<HeadContent title="Newsletters" />

			<div id={styles['main']}>
				<h1 id={styles['heading']}>Newsletters</h1>

				<div className={styles['wrapper']}>
					{newsletters.slice(0, 1).map((item, i) => {
						return (
							<LatestCard
								key={i}
								title={item.title}
								desc={item.desc}
								link={item.link}
							/>
						);
					} )}

					{newsletters.slice(1).map((item, i) => {
						return (
							<Card
								key={i}
								title={item.title}
								desc={item.desc}
								link={item.link}
							/>
						);
					} )}
				</div>
			</div>
		</>
	);
}
