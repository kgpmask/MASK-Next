import React from "react";
import styles from "@/styles/ArtCard.module.css";

const ArtCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagecontainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.hovercontent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ArtCardGallery = () => {
  return (
    <div className={styles.container}>
      <ArtCard
        image="/temporary_image.png"
        title="Bidoof"
        description="Ajayendra Kumar."
      />
      <ArtCard
        image="https://via.placeholder.com/350x250.png?text=Event+2"
        title="Event 2"
        description="This is a description for Event 2."
      />
      <ArtCard
        image="/temporary_image.png"
        title="Bidoof"
        description="Ajayendra Kumar."
      />
    </div>
  );
};

export default ArtCardGallery;
