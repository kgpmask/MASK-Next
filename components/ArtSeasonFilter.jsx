import React from 'react';
import styles from '@/styles/ArtSeasonFilter.module.css';

export default function SeasonFilter ({
	year,
	selectedSeason,
	setSelectedSeason,
	seasons
}) {
	// setSelectedSeason(seasons[0]);
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles['year-title']}>{year}</h2>
				<div className={styles['season-container']}>
					{seasons.map((season) =>
						season !== 'year' &&
							<button
								key={season}
								className={`${styles['chip-base']} ${
									selectedSeason === season ? styles['chip-selected'] : ''
								}`}
								onClick={() => setSelectedSeason(season)}
							>
								{season}
							</button>
					)}
				</div>
			</div>
		</>
	);
}
