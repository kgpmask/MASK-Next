import React from "react";
import YearCarousel from "./YearCarousel";
import artworks from "../data/artworks.json";

export default function YearCarouselGroup() {
  // Extract unique years from artworks data
  const years = [...new Set(artworks.map((art) => art.year))].sort((a, b) => b - a);

  return (
    <div>
      {years.map((year) => (
        <YearCarousel key={year} year={year} />
      ))}
    </div>
  );
}
