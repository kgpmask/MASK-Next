import HeroBanner from '@/components/HeroBanner';
import React, { useEffect, useState } from 'react';
import SeasonFilter from '@/components/ArtSeasonFilter';
import Carousel from '@/components/Carousel';
import ArtCarouselCard from '@/components/ArtCarosuelCard';
import styles from '@/styles/ArtPage.module.css';

export async function getServerSideProps (context) {
	const host = context.req.headers.host;
	const res = await fetch(`http://${host}/api/artworks`);
	const artworksRaw = await res.json();

	const artworks = artworksRaw.map(item => {
    	const d = new Date(item.date);

    	return {
      		src: `/assets/art/${item.link}`,
      		year: String(d.getFullYear()),
    		author: item.attr?.join(', ') || '',
      		description: item.name,
      		season: getSeason(d.getMonth())
    	};
  	});

	return {
		props: { artworks }
	};
}

// custom hook to get window size
function useWindowSize () {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		function handleResize () {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

function getSeason (month) {
	if (month <= 2) return 'winter'; // Jan–Mar
	if (month <= 5) return 'spring'; // Apr–Jun
	if (month <= 8) return 'summer'; // Jul–Sep
	return 'fall'; // Oct-Dec
}

function YearCarousel ({ year, artworks }) {
	const { width } = useWindowSize();
	const itemsPerPage =
		width >= 1024 ? 3 : width >= 640 ? 2 : 1;

	const filteredArtworksByYear = artworks.filter(
		(art) => art.year === year
	);

	const SEASON_ORDER = ['fall', 'summer', 'autumn', 'spring', 'winter', 'year'];
	const seasonCounts = SEASON_ORDER.reduce((acc, season) => {
		acc[season] = filteredArtworksByYear.filter(
			art => art.season === season
		).length;
		return acc;
	}, {});

	if (seasonCounts.fall < 3 || seasonCounts.summer < 3) {
		filteredArtworksByYear.forEach(art => {
			if (art.season === 'fall' || art.season === 'summer') art.season = 'autumn';
		});
		seasonCounts.autumn = seasonCounts.fall + seasonCounts.summer;
		seasonCounts.fall = 0;
		seasonCounts.summer = 0;
	}
	if (seasonCounts.winter < 3 || seasonCounts.spring < 3) {
		filteredArtworksByYear.forEach(art => {
			if (art.season === 'winter') art.season = 'spring';
		});
		seasonCounts.spring += seasonCounts.winter;
		seasonCounts.winter = 0;
	}
	if (seasonCounts.autumn > 0 && (seasonCounts.autumn < 3 && seasonCounts.spring < 3)) {
		filteredArtworksByYear.forEach(art => {
			if (art.season === 'autumn' || art.season === 'spring') art.season = 'year';
		});
		seasonCounts.year = seasonCounts.autumn + seasonCounts.spring;
		seasonCounts.autumn = 0;
		seasonCounts.spring = 0;
	}
	if (seasonCounts.spring < 3) {
		filteredArtworksByYear.forEach(art => {
			if (art.season === 'spring') art.season = 'summer';
		});
		seasonCounts.summer += seasonCounts.spring;
		seasonCounts.spring = 0;
	}
	if (seasonCounts.autumn > 0 && seasonCounts.autumn < 3) {
		filteredArtworksByYear.forEach(art => {
			if (art.season === 'autumn') art.season = 'spring';
		});
		seasonCounts.spring += seasonCounts.autumn;
		seasonCounts.autumn = 0;
	}

	function getSeasonsForYear (year, artworks) {
		return SEASON_ORDER.filter(season =>
			artworks.some(a => a.year === String(year) && a.season === season)
		);
	}
	const [selectedSeason, setSelectedSeason] = useState(getSeasonsForYear(year, artworks)[0]);

	const filteredArtworks = filteredArtworksByYear.filter(
		(art) => art.season === selectedSeason
	);

	const carouselItems = [...filteredArtworks];

	// gate rendering: to prevent browser from painting this element before we get width.
	if (typeof width !== 'number') {
		return null;
	} else return (
		<div className={styles.container}>
			<div className={styles['filter-container']}>
				<SeasonFilter
					year={year}
					selectedSeason={selectedSeason}
					setSelectedSeason={setSelectedSeason}
					seasons={getSeasonsForYear(year, artworks)}
				/>
			</div>

			<Carousel
				data={carouselItems}
				Card={ArtCarouselCard}
				numPerPage={itemsPerPage}
				showNavigator={true}
				showSideProp={false}
				autoscroll={true}
			/>
		</div>
	);
}

function YearCarouselGroup ({ artworks }) {
	// Extract unique years from artworks data
	const years = [...new Set(artworks.map((art) => art.year))].sort(
		(a, b) => b - a
	);

	return (
		<div>
			{years.map((year) =>
				<YearCarousel key={year} year={year} artworks={artworks}/>
			)}
		</div>
	);
}

export default function ArtPage ({ artworks }) {
	return (
		<>
			<div>
				<HeroBanner
					heroTitle={'Checkout Our Talented Artists'}
					heroContent={
						`We feature a diverse range of work from talented artists within our society. 
						From traditional to digital art, each piece reflects unique creativity and vision.`
					}
					buttonContent={'Checkout our content on Instagram'}
					buttonURL={'https://www.instagram.com/maskiitkgp'}
				/>
				<YearCarouselGroup artworks={artworks}/>
			</div>
		</>
	);
}
