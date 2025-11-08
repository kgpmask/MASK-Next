import Button from "../Button";
import React from "react";
import Image from "next/image";
import styles from "@/styles/home/HomeRecentEventsCarousel.module.css";

// takes in data object
const RecentEventsCarouselCard = ({ dataObj }) => {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["event-poster"]}>
          <Image draggable={false} src={dataObj.src} fill alt="event poster" />
        </div>
        <div className={styles["content-column"]}>
          <div className={styles["text-content"]}>
            <p className={styles["title"]}>{dataObj.title}</p>
            <p className={styles["description"]}>{dataObj.description}</p>
            <p className={styles["subdescription"]}>{dataObj.subdescription}</p>
            <Button text="Read More" href={"#"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentEventsCarouselCard;
