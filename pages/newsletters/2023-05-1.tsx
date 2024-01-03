import React, { useState } from 'react';
import styles from '@/styles/Newsletter.module.css';
import HeadContent from '@/components/HeadContent';

export default function NewsletterPage () {
	const [pageCount, setPageCount] = useState();

	const prevPage = () => {
		// Logic for going to the previous page
	};

	const nextPage = () => {
		// Logic for going to the next page
	};

	const scrollToPage = () => {};

	const copyLink = () => {
		// Logic for copying the link
	};

	const pagetitle = 'May 2023 Issue';

	const nextprevnewsletter = () => {
		return <div></div>;
	};

	const nextprevpage = () => {
		return <div></div>;
	};

	const updatePageState = () => {};

	return (
		<>
			<HeadContent title="Newsletters" />
			<div className={styles['controls']}>
				<a href={`/newsletters/$`}>
					<button
						className={styles['rel']}
						style={{ width: 'auto', padding: 'revert' }}
					>
						<span className={styles['buttonicon']}>&#x21B0;</span>
						<span className={styles['buttontext']}>Prev Newsletter</span>
					</button>
				</a>
				<a href={`/newsletters/$`}>
					<button className={styles['rel']}>
						<span className={styles['buttonicon']} id={styles['random']}>
							<span className={styles['icon-random']}></span>
						</span>
						<span className={styles['buttontext']}>Random</span>
					</button>
				</a>
				<a href={`/newsletters/$`}>
					<button
						className={styles['rel']}
						style={{ width: 'auto', padding: 'revert' }}
					>
						<span className={styles['buttonicon']}>&#x21B1;</span>
						<span className={styles['buttontext']}>Next Newsletter</span>
					</button>
				</a>
			</div>
			<hr className={styles['letter-breaker']} />
			<br />
			<h1>{pagetitle}</h1>

			<div className={styles['page-change-container']}>
				<button
					className={styles['rel']}
					onClick={prevPage}
					id={styles['prev-page']}
				>
					<span className={styles['buttonicon']}>&#x2190;</span>
					<span className={styles['buttontext']}>{`<<`}</span>
				</button>
				<input
					type="number"
					min="0"
					max={pageCount}
					onChange={(e) => scrollToPage()}
				/>
				{/* <button className={styles["rel"]} onClick={copyLink}>{`Share`}</button>*/}
				<button className={styles['rel']} onClick={nextPage} id="next-page">
					<span className={styles['buttonicon']}>&#x2192;</span>
					<span className={styles['buttontext']}>{`>>`}</span>
				</button>
			</div>

			<div>
				{nextprevnewsletter()}

				{/* {pdf && (
        <div className={styles["pdf-link"]}>
          <a href={`/assets/releases/${pdf}`} target="_blank" className={styles["undecorated-link"]}>
            <span className={styles["icon-download"]} style={{ fontSize: '2em', lineHeight: '50%' }}></span>
            <span style={{ position: 'relative', bottom: '0.4em' }}>&nbsp;&nbsp;Download PDF</span>
          </a>
        </div>
      )}*/}

				<div id={styles['pages-container']}>
					{nextprevpage()}
					<div id={styles['pages']} onScroll={updatePageState}>
						<div
							className={styles['page cover-default']}
							id={styles['cover-page']}
						>
							<img
								id={styles['cover-logo']}
								src="/assets/transparent_logo.png"
							/>
							<br />
              Manga and Anime
							<br />
              Society, Kharagpur
							<br />
							<br />
							<div id={styles['cover-page-title']}>{pagetitle}</div>
						</div>
						<div className={styles['page']} id={styles['cover-page']}></div>
						<div className={styles['faded']}>
              This article hasn't been published yet - stay tuned!
						</div>
					</div>
					{nextprevpage()}
				</div>
			</div>
			<div className={styles['page-change-container']}>
				<button
					className={styles['rel']}
					onClick={prevPage}
					id={styles['prev-page']}
				>
					<span className={styles['buttonicon']}>&#x2190;</span>
					<span className={styles['buttontext']}>{`<<`}</span>
				</button>
				<input
					type="number"
					min="0"
					max={pageCount}
					onChange={(e) => scrollToPage()}
				/>
				{/* <button className={styles["rel"]} onClick={copyLink}>{`Share`}</button>*/}
				<button className={styles['rel']} onClick={nextPage} id="next-page">
					<span className={styles['buttonicon']}>&#x2192;</span>
					<span className={styles['buttontext']}>{`>>`}</span>
				</button>
			</div>

			<div>
				<br />
				<div
					style={{
						width: '200px',
						margin: '10px auto',
						backgroundColor: 'rgba(255, 255, 255, 0.2)',
						borderRadius: '5px',
						padding: '10px',
						color: 'var(--light-gray)',
						fontSize: '0.8em',
						textAlign: 'center' // Changed from 'justify-center' to 'center'
					}}
				>
          Swipe left/right or click and use arrow keys to scroll
					<br />
          Best viewed on PC
				</div>
			</div>

			<hr className={styles['letter-breaker']} />
			<br />

			<div className={styles['controls']}>
				<a href={`/newsletters/$`}>
					<button
						className={styles['rel']}
						style={{ width: 'auto', padding: 'revert' }}
					>
						<span className={styles['buttonicon']}>&#x21B0;</span>
						<span className={styles['buttontext']}>Prev Newsletter</span>
					</button>
				</a>
				<a href={`/newsletters/$`}>
					<button className={styles['rel']}>
						<span className={styles['buttonicon']} id={styles['random']}>
							<span className={styles['icon-random']}></span>
						</span>
						<span className={styles['buttontext']}>Random</span>
					</button>
				</a>
				<a href={`/newsletters/$`}>
					<button
						className={styles['rel']}
						style={{ width: 'auto', padding: 'revert' }}
					>
						<span className={styles['buttonicon']}>&#x21B1;</span>
						<span className={styles['buttontext']}>Next Newsletter</span>
					</button>
				</a>
			</div>
		</>
	);
}

/* const spoilered = document.querySelectorAll(".spoiler");
for (let i = 0; i < spoilered.length; i++) {
  const article = spoilered[i];
  article.addEventListener("click", () => {
    if (!article.classList.contains("spoiler")) return;
    article.classList.add("being-removed");
    setTimeout(() => article.classList.remove("spoiler"), 1000);
  });
}*/
