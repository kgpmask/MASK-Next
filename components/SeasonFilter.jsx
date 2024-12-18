import React from "react";
import styles from "../styles/SeasonFilter.module.css";

export default function SeasonFilter({ year, selectedSeason, setSelectedSeason }) {
  const seasons = ["Winter", "Spring", "Summer", "Fall"];

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.year}>{year}</h2>
      <div className={styles.chipContainer}>
        {seasons.map((season) => (
          <button
            key={season}
            className={`${styles.chip} ${
              selectedSeason === season ? styles.selectedChip : ""
            }`}
            onClick={() => setSelectedSeason(season)}
          >
            {season}
          </button>
        ))}
      </div>
    </div>
  );
}
