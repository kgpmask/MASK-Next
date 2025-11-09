import styles from "@/styles/home/Home.module.css";
import HeroSection from "@/components/home/HeroSection";
import RecentEventsSection from "@/components/home/RecentEventsSection";
import FanartSection from "@/components/home/FanartSection";
import AboutUsSection from "@/components/home/AboutUsSection";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <RecentEventsSection />
      <FanartSection />
      {/* <div className={styles["header-content"]}>
        <RecentEventsCarousel
          Template={RecentEventsCarouselCard}
          numPerPage={1}
          discrete={false}
          data={recentItems}
          maxWidth={"65vw"}
          onSlideChange={setCurrentItemIndex}
          currentElement={currentItemIndex}
        />
      </div> */}
      <AboutUsSection />
    </div>
  );
}
