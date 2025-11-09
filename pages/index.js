import styles from "@/styles/home/Home.module.css";
import RecentCarousel from "../components/home/RecentCarousel";
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
        content={recentItems}
        currentItemIndex={currentItemIndex}
        onClickItem={setCurrentItemIndex}
      />
      <div className={styles["header-content"]}>
        <RecentCarousel
          Template={RecentEventsCarouselCard}
          numPerPage={1}
          discrete={false}
          data={recentItems}
          maxWidth={"65vw"}
          onSlideChange={setCurrentItemIndex}
          currentElement={currentItemIndex}
        />
      </div>
      <FanartSection />
      <div className={styles["header-content"]}>
        <RecentCarousel
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
