import styles from "@/styles/home/Home.module.css";
import HeroSection from "@/components/home/HeroSection";
import RecentEventsSection from "@/components/home/RecentEventsSection";
import FanartSection from "@/components/home/FanartSection";
import AMVSection from "@/components/home/AMVSection";
import AboutUsSection from "@/components/home/AboutUsSection";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <RecentEventsSection />
      <FanartSection />
      <AMVSection />
      <AboutUsSection />
    </div>
  );
}
