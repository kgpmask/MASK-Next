import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/ImageCarousel.module.css";

interface CarouselProps {
  images: string[];
  autoChangeInterval?: number; // Optional prop for auto-change interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ images, autoChangeInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string | null>(null);
  const timeoutIdRef = useRef<number | null>(null);

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
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const startAutoChange = () => {
    timeoutIdRef.current = window.setInterval(() => {
      handleNext();
    }, autoChangeInterval);
  };

  const stopAutoChange = () => {
    if (timeoutIdRef.current !== null) {
      clearInterval(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };

  useEffect(() => {
    // Start auto change on mount
    startAutoChange();

    // Clear interval on component unmount
    return () => stopAutoChange();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Clear interval when manually changing the image
  useEffect(() => {
    stopAutoChange();
    // Restart auto change after a delay
    timeoutIdRef.current = window.setTimeout(() => {
      startAutoChange();
    }, autoChangeInterval);
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.carousel}>
      <div className={styles["carousel-images"]}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className={styles.image}
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
            </svg>
          </motion.div>
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
        {images.map((_, index) => (
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
