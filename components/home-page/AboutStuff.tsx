import React from 'react';
import styles from '@/styles/Home.module.css';

function AboutStuff () {
	return (
		<div>
			<div className={styles['about-stuff']}>
				<h1>Welcome to the MASK website!</h1>
				<div className={'text ' + styles['text']} style={{ fontSize: '1.1em' }}>
          Welcome to the official website of the Manga and Anime Society Kharagpur.
          We are a community that is dedicated to anime and related content.
          We aim to spread our passion and love for anime, manga, and related media.
          We create content ranging from AMVs and reels to artwork and sketches, and hold crowd events like anime quizzes.
          We wish to reach to the skies and beyond, as we aim to diversify and
          increase the scope of our interaction and indulgence in the coming years.
				</div>
			</div>
		</div>
	);
}

export default AboutStuff;
