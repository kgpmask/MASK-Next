import ArtHeader from "./header";
import YearCarouselGroup from "@/components/YearCarousel";
import styles from "@/styles/Arts.module.css";

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
