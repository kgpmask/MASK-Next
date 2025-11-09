import { useState } from "react";
import Image from "next/image";
import RecentEventsCarousel from "@/components/home/RecentEventsCarousel";
import RecentEventsCarouselCard from "@/components/home/RecentEventsCarouselCard";
import recentContent from "@/data/recentEvents.json";
import styles from "@/styles/home/Home.module.css";

const recentEvents = recentContent.slice(0, 5);
const recentEventsSummaries = recentEvents.slice(0, 3).map((recentEvent) => ({
  ...recentEvent,
  description:
    recentEvent.description.slice(0, 100) +
    (recentEvent.description.length > 100 ? "..." : ""),
}));

export default function RecentEventsSection() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  return (
    <>
      <div className={styles["recent-events"]}>
        <div className={styles.div1}>
          <h2>Recent Events</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
            primis nisi imperdiet adipiscing facilisis enim sociosqu.
          </p>
        </div>
        {recentEventsSummaries.map((event, idx) => (
          <div
            key={event.title}
            className={
              currentEventIndex === idx
                ? styles["active-event"]
                : idx === recentEventsSummaries.length - 1 &&
                  currentEventIndex > idx
                ? styles["last-deactive-element"]
                : styles.events
            }
            onClick={() => setCurrentEventIndex(idx)}
          >
            <div>
              <Image
                alt="calendar"
                src="/assets/icons/calendar.svg"
                height={30}
                width={30}
              />
            </div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <div className={styles["header-content"]}>
        <RecentEventsCarousel
          Template={RecentEventsCarouselCard}
          numPerPage={1}
          discrete={false}
          data={recentEvents}
          onSlideChange={setCurrentEventIndex}
          currentElement={currentEventIndex}
        />
      </div>
    </>
  );
}
