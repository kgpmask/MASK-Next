import ArtHeader from "./header";
import YearCarouselGroup from "@/components/art/YearCarousel";
import styles from "@/styles/art/Arts.module.css";

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
