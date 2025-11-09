import React from "react";
import Image from "next/image";
import styles from "@/styles/home/HomeFanartCarousel.module.css";

// takes in data object
const FanartCarouselCard = ({ dataObj }) => {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["fanart-poster"]}>
          <Image draggable={false} src={dataObj.src} fill alt="fanart poster" />
        </div>
      </div>
    </>
  );
};

export default FanartCarouselCard;
