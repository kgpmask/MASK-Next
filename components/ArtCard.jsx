import React from "react";
import styles from "@/styles/ArtCard.module.css";

const ArtCard = ({ image, title, description, link }) => {
  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
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

export default ArtCard;

// const ArtCardGallery = () => {
//   return (
//     <div className={styles.container}>
//       <ArtCard
//         image="/temporary_image.png"
//         title="Bidoof"
//         description="Ajayendra Kumar."
//         link="https://example.com/march-2024-issue"
//       />
//       <ArtCard
//         image="https://via.placeholder.com/350x250.png?text=Event+2"
//         title="Event 2"
//         description="This is a description for Event 2."
//         link="https://example.com/march-2024-issue"
//       />
//       <ArtCard
//         image="/temporary_image.png"
//         title="Bidoof"
//         description="Ajayendra Kumar."
//         link="https://example.com/march-2024-issue"
//       />
//     </div>
//   );
// };

// export default ArtCardGallery;
