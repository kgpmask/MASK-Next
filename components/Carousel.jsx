import React, { useRef } from "react";
import styles from "../styles/Carousel.module.css";

export default function Carousel({ images }) {
  const sliderRef = useRef(null);

  const slidePrev = () => {
    const itemWidth = sliderRef.current.firstChild.offsetWidth + 16; // Image + gap
    sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const slideNext = () => {
    const itemWidth = sliderRef.current.firstChild.offsetWidth + 16; // Image + gap
    sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.leftButton}`} onClick={slidePrev}>
        <img src="/assets/icons/left-arrow.svg" alt="Previous" />
      </button>

      <div ref={sliderRef} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.sliderItem}>
            {image ? (
              <img src={image.src} alt={`Artwork ${index + 1}`} className={styles.image} />
            ) : (
              <div className={styles.placeholder}>No Artwork</div>
            )}
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.rightButton}`} onClick={slideNext}>
        <img src="/assets/icons/right-arrow.svg" alt="Next" />
      </button>
    </div>
  );
}
