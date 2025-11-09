import styles from "@/styles/home/Home.module.css";
import CalendarIcon from "../icons/CalendarIcon";

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
      <div
        className={
          currentItemIndex !== 0 ? styles.events : styles["active-event"]
        }
        onClick={() => onClickItem(0)}
      >
        <div>
          <CalendarIcon />
        </div>
        <h2>{content[0]?.title}</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
          primis
        </p>
      </div>
      <div
        className={
          currentItemIndex !== 1 ? styles.events : styles["active-event"]
        }
        onClick={() => onClickItem(1)}
      >
        <div>
          <CalendarIcon />
        </div>
        <h2>{content[1]?.title}</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
          primis
        </p>
      </div>
      <div
        className={
          currentItemIndex !== 2 ? styles.events : styles["active-event"]
        }
        onClick={() => onClickItem(2)}
      >
        <div>
          <CalendarIcon />
        </div>
        <h2>{content[2]?.title}</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis
          primis
        </p>
      </div>
    </div>
  );
}
