import Button from "../Button";
import React from "react";
import Image from "next/image";
import styles from "@/styles/home/HomeFanartCarousel.module.css";

// takes in data object
const FanartCarouselCard = ({ dataObj }) => {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["content-column"]}>
          <div className={styles["text-content"]}>
            <p className={styles["title"]}>
              <strong>Fanart</strong> Submissions
            </p>
            <p className={styles["description"]}>{dataObj.description}</p>
            <Button text="Our Artwork" href={"#"} color="black" />
          </div>
        </div>
        <div className={styles["fanart-poster"]}>
          <Image src={dataObj.src} fill alt="fanart poster" />
        </div>
      </div>
    </>
  );
};

export default FanartCarouselCard;
