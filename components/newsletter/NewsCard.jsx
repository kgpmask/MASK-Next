import React from "react";
import styles from "@/styles/newsletter/NewsletterCard.module.css";

const NewsletterCard = ({ image, title, description, link, onCardClick }) => {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
    window.open(link, "_blank");
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imagecontainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
