import YearCarouselGroup from "@/components/art/YearCarousel";
import styles from "@/styles/art/Arts.module.css";
import { useEffect, useState } from "react";

function ArtHeader() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <header className={`${styles["art-header"]}`}>
        <div
          className={`${styles["container"]} ${animate ? styles.fadeIn : ""}`}
        >
          <div
            className={`${styles["header-content"]} ${
              animate ? styles.slideUp : ""
            }`}
          >
            <p className={styles["title"]}>Checkout Our Talented Artists</p>
            <p className={styles["subtitle"]}>
              We feature a diverse range of work from talented artists within
              our society. From traditional to digital art, each piece reflects
              unique creativity and vision.
            </p>
            <div className={styles["cta-button"]}>
              <p className={styles["cta-text-mobile"]}>Checkout Instagram</p>
              <p className={styles["cta-text-desktop"]}>
                Checkout our content on Instagram
              </p>
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
      </header>
    </>
  );
}

export default function Art() {
  return (
    <>
      <div className={styles["arts-page"]}>
        <ArtHeader />
        <YearCarouselGroup />
      </div>
    </>
  );
}
