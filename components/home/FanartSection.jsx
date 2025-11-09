import { useState } from "react";
import styles from "@/styles/home/Home.module.css";
import FanartCarousel from "@/components/home/FanartCarousel";
import FanartCarouselCard from "@/components/home/FanartCarouselCard";
import recentContent from "@/data/recentEvents.json";

export default function FanartSection() {
  const fanartItems = recentContent.slice(0, 5);
  const [currentFanartIndex, setCurrentFanartIndex] = useState(0);
  return (
    <div
      className={styles["fanart-section"]}
      style={{
        backgroundImage: `linear-gradient(#e43332d9, #e43332d9), url('${
          fanartItems[currentFanartIndex]?.src || "/assets/news/header.png"
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "center 70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles["fanart-header-content"]}>
        <FanartCarousel
          Template={FanartCarouselCard}
          showNavigator={true}
          numPerPage={1}
          discrete={false}
          data={fanartItems}
          maxWidth={"65vw"}
          onSlideChange={setCurrentFanartIndex}
          currentElement={currentFanartIndex}
        />
      </div>
    </div>
  );
}
