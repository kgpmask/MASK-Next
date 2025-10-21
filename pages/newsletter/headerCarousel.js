import styles from "@/styles/NewsHeaderCarousel.module.css";
import newsContent from "@/data/news.json";
import NewsCarousel from "@/components/NewsCarousel";
import NewsTemplate from "@/components/NewsTemplate";

export default function NewsHeaderCarousel() {
  const newsItems = newsContent.slice(0, 5);

  return (
    <>
      <header className={styles["header"]}>
        <div class={styles["header-content"]}>
          <NewsCarousel
            Template={NewsTemplate}
            showNavigator={true}
            numPerPage={1}
            discrete={false}
            data={newsItems}
            maxWidth={"65vw"}
          />
        </div>
      </header>
    </>
  );
}
