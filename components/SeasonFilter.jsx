import React from "react";
import styles from "@/styles/SeasonalFilter.module.css";

export default function SeasonFilter({
  year,
  selectedSeason,
  setSelectedSeason,
}) {
  const seasons = ["winter", "spring", "summer", "fall"];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles["year-title"]}>{year}</h2>
        <div className={styles["season-container"]}>
          {seasons.map((season) => (
            <button
              key={season}
              className={`${styles["chip-base"]} ${
                selectedSeason === season ? styles["chip-selected"] : ""
              }`}
              onClick={() => setSelectedSeason(season)}
            >
              {season}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
