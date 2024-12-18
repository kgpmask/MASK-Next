import React, { useState } from "react";
import SeasonFilter from "./SeasonFilter";
import Carousel from "./Carousel";
import artworks from "../data/artworks.json";
import styles from "../styles/YearCarousel.module.css";

export default function YearCarousel({ year }) {
  const [selectedSeason, setSelectedSeason] = useState("Winter");

  const filteredArtworks = artworks.filter(
    (art) => art.year === year && art.season === selectedSeason
  );

  // Fill blank slides if fewer than 3 images
  const carouselItems = [...filteredArtworks, ...Array(3 - filteredArtworks.length).fill(null)];

  return (
    <div className={styles.yearCarousel}>
      <SeasonFilter
        year={year}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />
      <Carousel images={carouselItems} />
    </div>
  );
}
