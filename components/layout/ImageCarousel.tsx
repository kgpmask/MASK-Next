/* eslint-disable react-hooks/exhaustive-deps */
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import styles from "@/styles/ImageCarousel.module.css";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // Import the Image component

interface Props {
  imgs: string[];
}

function Carousel({ imgs }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    );
    resetTimeout();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    );
    resetTimeout();
  };

  // Timeout settings
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const timeoutDelay = 3000; // Change image every 3 seconds

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(handleNext, timeoutDelay);
  }, [handleNext]);


  useEffect(() => {
    resetTimeout();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, resetTimeout]);

  if (imgs.length === 0) {
    return null; // or render some default content
  }

  return (
    <>
      <div className={styles['with-controls']}>
        <div className={styles['imgshow-container']}>
          <div className={styles.carousel}>
            <div className={styles["carousel-images"]}>
              <div className="img-container">
                {imgs.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`carousel-image-${index}`}
                    className={currentIndex === index ? styles.active : styles.inactive}
                    width={500} // Set the width of the image
                    height={300} // Set the height of the image
                  />
                ))}
              </div>
            </div>
            <div className={styles["carousel-controls"]}>
              <button className={styles["left-btn"]} onClick={handlePrevious}>
                <BiSolidChevronLeft />
              </button>
              <button className={styles["right-btn"]} onClick={handleNext}>
                <BiSolidChevronRight />
              </button>
            </div>
          </div>
        </div>
      <div className={styles["carousel-indicator"]}>
        {imgs.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
          ></div>
        ))}
      </div>
      </div>

    </>
  );
}

export default Carousel;
