import styles from "@/styles/newsletter/NewsHeaderCarousel.module.css";
import newsContent from "@/data/news.json";
import NewsCarousel from "@/components/newsletter/NewsCarousel";
import NewsTemplate from "@/components/newsletter/NewsTemplate";
import { useState } from "react";

export default function NewsHeaderCarousel() {
  const newsItems = newsContent.slice(0, 5);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  return (
    <>
      <header
        className={styles["header"]}
        style={{
          backgroundImage: `linear-gradient(#e43332d9, #e43332d9), url('${
            newsItems[currentNewsIndex]?.src || "/assets/news/header.png"
          }')`,
        }}
      >
        <div className={styles["header-content"]}>
          <NewsCarousel
            Template={NewsTemplate}
            showNavigator={true}
            numPerPage={1}
            discrete={false}
            data={newsItems}
            maxWidth={"65vw"}
            onSlideChange={setCurrentNewsIndex}
          />
        </div>
      </header>
    </>
  );
}
