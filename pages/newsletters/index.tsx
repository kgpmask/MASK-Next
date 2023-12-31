import HeadContent from "@/components/HeadContent";
import styles from "@/styles/Newsletters.module.css";
import latestnewsletter from "./latestnewsletter";
import newsletters from "./newsletters";
import React from "react";
import Card from "../../components/Card";
import LatestCard from "../../components/LatestCard";

export default function NewslettersPage() {
  return (
    <>
      <HeadContent title="Newsletters" />

      <div id={styles["main"]}>
        <h1 id={styles["heading"]}>Newsletters</h1>

        <div className={styles["wrapper"]}>
          {latestnewsletter.map((item, i) => {
            return (
              <LatestCard
                key={i}
                id={item.id}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            );
          })}

          {newsletters.map((item, i) => {
            return (
              <Card
                key={i}
                id={item.id}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
