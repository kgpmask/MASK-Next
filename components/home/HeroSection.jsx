import { FiArrowRight } from "react-icons/fi";
import styles from "@/styles/home/Home.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <p className={styles.p1}>
        <span style={{ color: "#E43332" }}>Welcome</span> to the official
        website of
      </p>
      <p className={styles.title}>
        <strong>MANGA & ANIME</strong> <br />
        SOCIETY KHARAGPUR
      </p>
      <p className={styles.description}>
        We are a community that is dedicated to anime and related content. We
        aim to spread our passion and love for anime, manga, and related media.
        We create content ranging from AMVs and reels to artwork and sketches,
        and hold crowd events like anime quizzes.
      </p>
      <div className={styles.buttons}>
        <div className={styles.button1}>About us</div>
        <div className={styles.button2}>
          Checkout our latest newsletter
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
}
