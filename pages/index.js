import styles from "@/styles/home/Home.module.css";
import RecentEventsCarousel from "../components/home/RecentEventsCarousel";
import recentContent from "@/data/recentEvents.json";
import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import FanartSection from "@/components/home/FanartSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import RecentEvents from "@/components/home/RecentEvents";
import RecentEventsCarouselCard from "@/components/home/RecentEventsCarouselCard";

export default function Home() {
  const recentItems = recentContent.slice(0, 5);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  return (
    <div className={styles.home}>
      <HeroSection />
      <RecentEvents
        content={recentItems.slice(0, 3).map((recentItem) => ({
          ...recentItem,
          description:
            recentItem.description.slice(0, 100) +
            (recentItem.description.length > 100 ? "..." : ""),
        }))}
        currentItemIndex={currentItemIndex}
        onClickItem={setCurrentItemIndex}
      />
      <div className={styles["header-content"]}>
        <RecentEventsCarousel
          Template={RecentEventsCarouselCard}
          numPerPage={1}
          discrete={false}
          data={recentItems}
          onSlideChange={setCurrentItemIndex}
          currentElement={currentItemIndex}
        />
      </div>
      <FanartSection />
      <div className={styles["header-content"]}>
        <RecentEventsCarousel
          Template={RecentEventsCarouselCard}
          numPerPage={1}
          discrete={false}
          data={recentItems}
          maxWidth={"65vw"}
          onSlideChange={setCurrentItemIndex}
          currentElement={currentItemIndex}
        />
      </div>
      <AboutUsSection />
    </div>
  );
}
