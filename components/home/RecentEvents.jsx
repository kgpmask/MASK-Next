import Image from "next/image";
import styles from "@/styles/home/Home.module.css";

export default function RecentEvents({
  content = [],
  currentItemIndex,
  onClickItem,
}) {
  return (
    <div className={styles["recent-events"]}>
      <div className={styles.div1}>
        <h2>Recent Events</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
          primis nisi imperdiet adipiscing facilisis enim sociosqu.
        </p>
      </div>
      {content.map((event, idx) => (
        <div
          key={event.title}
          className={
            currentItemIndex === idx
              ? styles["active-event"]
              : idx === content.length - 1 && currentItemIndex > idx
              ? styles["last-deactive-element"]
              : styles.events
          }
          onClick={() => onClickItem(idx)}
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
  );
}
