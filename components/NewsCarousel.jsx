import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/NewsCarousel.module.css";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const NewsCarousel = ({
  Template = {},
  showNavigator,
  numPerPage,
  discrete,
  data = [],
  onSlideChange,
}) => {
  const [currentElement, setCurrentElement] = useState(0);
  const sliderRef = useRef(null);

  const AUTO_SCROLL_DELAY = 4000000;
  const [isHovering, setIsHovering] = useState(false);

  const getScrollOffset = (num) => sliderRef.current.children[num].offsetLeft;

  useEffect(() => {
    if (isHovering | (data.length === 0)) return;
    const slideInterval = setInterval(() => {
      moveNext();
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(slideInterval);
  });

  useEffect(() => {
    sliderRef.current.scrollTo({
      left: getScrollOffset(currentElement),
      behavior: "smooth",
    });
    if (onSlideChange) {
      onSlideChange(currentElement);
    }
  }, [currentElement]);

  const moveNext = () => setCurrentElement((cur) => (cur + 1) % data.length);
  const movePrev = () =>
    setCurrentElement((cur) => (cur - 1 + data.length) % data.length);
  const moveHere = (num) => setCurrentElement(num);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles["carousel-wrapper"]}>
        <Image
          src="/assets/icons/left-arrow.svg"
          alt="left arrow"
          width={30}
          height={30}
          className={styles.arrow}
          onClick={movePrev}
        />
        <div className={styles.slider} ref={sliderRef}>
          {data.map((dataObj, idx) => (
            <div
              style={{ height: "fit-content" }}
              key={`item-${idx}`}
              className={styles["item-wrapper"]}
            >
              {dataObj ? (
                <div className={styles["item-content"]} key={dataObj.id}>
                  <Template dataObj={dataObj} key={dataObj.id} />
                </div>
              ) : (
                <div className={styles["empty-item"]}>
                  <div className={styles["empty-content"]}>No Artwork</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="right arrow"
          width={30}
          height={30}
          className={styles.arrow}
          onClick={moveNext}
        />
      </div>
      {showNavigator && (
        <div className={styles["navigation-dots"]}>
          {Array.from({ length: data.length }).map((_, num) =>
            !(num >= currentElement && num < currentElement + numPerPage) ? (
              <div
                className={styles.dot}
                key={num}
                onClick={() => moveHere(num)}
              ></div>
            ) : (
              <div
                className={`${styles.dot} ${styles["active-dot"]}`}
                key={num}
              ></div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default NewsCarousel;
