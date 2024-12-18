import React from "react";
import styles from "@/styles/NewsletterCard.module.css";

const NewsletterCard = ({ image, title, description, link }) => {
  const handleCardClick = () => {
    window.location.href = link;
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
  return (
    <div className={styles.container}>
      <NewsletterCard
        image="https://via.placeholder.com/350x250.png?text=Event+1"
        title="March 2024 Issue"
        description="The March Edition of the issue is all about action anime!"
        link="https://example.com/march-2024-issue"
      />
      <NewsletterCard
        image="https://via.placeholder.com/350x250.png?text=Event+2"
        title="Event 2"
        description="This is a description for Event 2."
        link="https://example.com/event-2"
      />
      <NewsletterCard
        image="https://via.placeholder.com/350x250.png?text=Event+3"
        title="Event 3"
        description="This is a description for Event 3."
        link="https://example.com/event-3" 
      />
    </div>
  );
};

export default NewsletterCardGallery;
