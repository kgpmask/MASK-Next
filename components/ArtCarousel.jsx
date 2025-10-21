import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Carousel.module.css";

// takes in parameters, Template , showNavigator, numPerPage, discrete
const Carousel = ({
  Template = {},
  showNavigator,
  numPerPage,
  discrete,
  data = [],
}) => {
  const [currentElement, setCurrentElement] = useState(0);
  const [sliderWidth, setSliderWidth] = useState("1000px");
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.firstChild) {
      const itemWidth = sliderRef.current.firstChild.offsetWidth;
      const gap = 16;
      const newSliderWidth = itemWidth * numPerPage + gap * (numPerPage - 1);
      setSliderWidth(`${newSliderWidth}px`);
    }
  }, [numPerPage, data]);

  function moveNext() {
    const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
    if (currentElement + numPerPage > data.length - 1) {
      setCurrentElement(0);
      sliderRef.current.scrollBy({
        left: -itemWidth * (data.length - 1),
        behavior: "smooth",
      });
    } else {
      setCurrentElement(currentElement + 1);
      sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }
  function movePrev() {
    const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
    if (currentElement <= 0) {
      setCurrentElement(data.length - 1);
      sliderRef.current.scrollBy({
        left: itemWidth * (data.length - 1),
        behavior: "smooth",
      });
    } else {
      setCurrentElement(currentElement - 1);
      sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  }
  function moveHere(targetNum) {
    const itemWidth = sliderRef.current.firstChild.offsetWidth + 16;
    const shiftCount = targetNum - currentElement;
    sliderRef.current.scrollBy({
      left: itemWidth * shiftCount,
      behavior: "smooth",
    });
    setCurrentElement(targetNum);
  }
  function inheritWidth() {
    // inherits width of parent from child
    if (sliderRef != null && sliderRef.current != null) {
      setSliderWidth(
        (sliderRef.current.firstChild.offsetWidth + 16) * numPerPage - 16
      );
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles["carousel-wrapper"]}>
        <Image
          src="/assets/icons/left-arrow.svg"
          alt="left arrow"
          width={30}
          height={30}
          className={styles.arrow}
          onClick={movePrev}
        />
        <div
          className={styles.slider}
          ref={sliderRef}
          style={{ maxWidth: sliderWidth, width: sliderWidth }}
        >
          {data.map((dataObj, idx) => (
            <div
              style={{ height: "fit-content" }}
              onLoad={inheritWidth}
              key={`item-${idx}`}
              className={styles["item-wrapper"]}
            >
              {dataObj ? (
                <div
                  className={styles["item-content"]}
                  key={dataObj.id}
                  style={{
                    flex: `0 0 calc((100% - 32px) / ${numPerPage})`,
                  }}
                >
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

export default Carousel;
