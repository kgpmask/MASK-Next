import React from "react";
import Image from "next/image";
import styles from "@/styles/art/ArtsTemplate.module.css";

// takes in data object
const ArtTemplate = ({ dataObj }) => {
  return (
    <div className={styles["art-container"]}>
      <Image
        src={dataObj.src}
        width={558}
        height={421}
        alt="art image"
        className={styles["art-image"]}
      />

      <div className={styles["art-overlay"]}>
        <h3 className={styles["art-title"]}>{dataObj.title}</h3>
        <div>{dataObj.description}</div>
      </div>
    </div>
  );
};

export default ArtTemplate;
