import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "@/styles/VideoCarousel.module.css";

interface CarouselProps {
  videos: string[]; // Replace 'images' with 'videos'
  autoChangeInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ videos, autoChangeInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === videos.length ? 0 : prevIndex + 1
    );

    // Reset timeout to continue automatic changes
    stopAutoChange();
    startAutoChange();
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? videos.length - 1 : prevIndex - 1
    );

    // Reset timeout to continue automatic changes
    stopAutoChange();
    startAutoChange();
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);

    // Reset timeout to continue automatic changes
    stopAutoChange();
    startAutoChange();
  };

  const startAutoChange = () => {
    setTimeoutId(
      window.setTimeout(() => {
        handleNext();
      }, autoChangeInterval)
    );
  };

  const stopAutoChange = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  useEffect(() => {
    // Start auto change on mount
    startAutoChange();

    // Clear timeout on component unmount
    return () => stopAutoChange();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Clear timeout when manually changing the video
  useEffect(() => {
    stopAutoChange();
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.carousel}>
      <div className={styles["carousel-images"]}>
        <AnimatePresence>
          {/* Render LiteYouTubeEmbed for YouTube videos */}
          <LiteYouTubeEmbed
            id={videos[currentIndex]}
            title={`YouTube Video ${currentIndex + 1}`}
            wrapperClass="youtube-wrapper"
            iframeClass="youtube-iframe"
            visible={true}
          />
        </AnimatePresence>
        <div className={styles.slide_direction}>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className={`${styles.left} ${styles.arrow}`}
            onClick={handlePrevious}
          >
<svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className={`${styles.right} ${styles.arrow}`}
            onClick={handleNext}
          >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className={styles.carousel_indicator}>
        {videos.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? styles.active : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
