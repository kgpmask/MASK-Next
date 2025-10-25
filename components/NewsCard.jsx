import React from "react";
import styles from "@/styles/NewsletterCard.module.css";
import newsContent from "@/data/news.json";

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

const NewsletterCardGallery = () => {
  const handleCustomCardClick = () => {
    console.log("Custom click handler for the card");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>
          Check out our other <strong>Newsletters</strong>
        </p>
      </div>
      <div className={styles.subheading}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles.grid}>
        {newsContent.map((news, idx) => (
          <div key={news.id}>
            <NewsletterCard
              image={news.src}
              title={news.title}
              description={news.description.slice(0, 100) + "..."}
              link={news.link}
              onCardClick={handleCustomCardClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterCardGallery;
