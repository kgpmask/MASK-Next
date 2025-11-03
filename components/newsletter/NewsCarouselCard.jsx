import React from "react";
import Image from "next/image";
import styles from "@/styles/newsletter/NewsCarouselCard.module.css";
import Button from "../Button";

// takes in data object
const NewsCarouselCard = ({ dataObj }) => {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["news-poster"]}>
          <Image src={dataObj.src} fill alt="news poster" />
        </div>
        <div className={styles["content-column"]}>
          <div className={styles["text-content"]}>
            <p className={styles["title"]}>{dataObj.title}</p>
            <p className={styles["description"]}>{dataObj.description}</p>
            <p className={styles["subdescription"]}>{dataObj.subdescription}</p>
          </div>
          <Button text={"Read More"} color={"black"} />
        </div>
        {/* Mobile Content */}
        <div className={styles["content-mobile"]}>
          <div className={styles["main-screen-mobile"]}>
            <p className={styles["title"]}>{dataObj.title}</p>
            <div className={styles["text-content-mobile"]}>
              <div className={styles["mobile-news-poster"]}>
                <Image src={dataObj.src} fill alt="news poster" />
              </div>
              <p className={styles["description"]}>
                {dataObj.description.slice(0, 310)}...
              </p>
            </div>
          </div>
          <p className={styles["subdescription"]}>{dataObj.subdescription}</p>
          <Button text={"Read More"} color={"black"} fullWidth={true} />
        </div>
      </div>
    </>
  );
};

export default NewsCarouselCard;
