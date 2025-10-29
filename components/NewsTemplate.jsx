import React from "react";
import Image from "next/image";
import styles from "@/styles/NewsTemplate.module.css";

// takes in data object
const NewsTemplate = ({ dataObj }) => {
  return (
    <>
      <div className={styles["content"]}>
        <Image
          src={dataObj.src}
          width={376}
          height={532}
          alt="news poster"
          className={styles["news-poster"]}
        />
        <div className={styles["content-column"]}>
          <div className={styles["text-content"]}>
            <p className={styles["title"]}>{dataObj.title}</p>
            <p className={styles["description"]}>{dataObj.description}</p>
            <p className={styles["subdescription"]}>{dataObj.subdescription}</p>
          </div>
          <div className={styles["cta-button"]}>
            <p className={styles["cta-text"]}>Read More</p>
            <div>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.50006H13M13 7.50006L8 1.00006M13 7.50006L8 14.0001"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Mobile Content */}
        <div className={styles["content-mobile"]}>
          <div className={styles["main-screen-mobile"]}>
            <Image
              src={dataObj.src}
              width={376}
              height={532}
              alt="news poster"
              className={styles["mobile-news-poster"]}
            />
            <div className={styles["text-content-mobile"]}>
              <p className={styles["title"]}>{dataObj.title}</p>
              <p className={styles["description"]}>
                {dataObj.description.slice(0, 335)}...
              </p>
            </div>
          </div>
          <p className={styles["subdescription"]}>{dataObj.subdescription}</p>
          <div className={styles["cta-button"]}>
            <p className={styles["cta-text"]}>Read More</p>
            <div>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.50006H13M13 7.50006L8 1.00006M13 7.50006L8 14.0001"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsTemplate;
