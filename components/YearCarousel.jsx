import React, { useEffect, useState } from "react";
import SeasonFilter from "./SeasonFilter";
import Carousel from "./ArtCarousel";
import artworks from "../data/artworks.json";
import ArtTemplate from "./ArtTemplate";
import styles from "@/styles/YearCarousel.module.css";

// custom hook to get window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function YearCarousel({ year }) {
  const [selectedSeason, setSelectedSeason] = useState("spring");
  const { width } = useWindowSize();
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      if (width >= 1024) return 3;
      if (width >= 640) return 2;
      return 1;
    }
    return 1;
  });

  useEffect(() => {
    if (typeof width !== "number") return;
    if (width >= 1024) {
      setItemsPerPage(3);
    } else if (width >= 640) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  }, [width]);
  const filteredArtworks = artworks.filter(
    (art) => art.year === year && art.season === selectedSeason
  );

  // Fill blank slides if fewer than 3 images
  const fillCount = Math.max(itemsPerPage - filteredArtworks.length, 0); // Ensure non-negative length
  const carouselItems = [...filteredArtworks, ...Array(fillCount).fill(null)];

  return (
    <div className={styles.container}>
      <div className={styles["filter-container"]}>
        <SeasonFilter
          year={year}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
        />
      </div>

      <Carousel
        Template={ArtTemplate}
        showNavigator={true}
        numPerPage={itemsPerPage}
        discrete={false}
        data={carouselItems}
        maxWidth={"95vw"}
      />
    </div>
  );
}

export default function YearCarouselGroup() {
  // Extract unique years from artworks data
  const years = [...new Set(artworks.map((art) => art.year))].sort(
    (a, b) => b - a
  );

  return (
    <div>
      {years.map((year) => (
        <YearCarousel key={year} year={year} />
      ))}
    </div>
  );
}
