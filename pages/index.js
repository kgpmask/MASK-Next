import styles from "@/styles/home/Home.module.css";
import RecentCarousel from "../components/home/RecentCarousel";
import recentContent from "@/data/recentEvents.json";
import { useState } from "react";
import RecentEventsCarouselCard from "@/components/home/RecentEventsCarouselCard";
import FanartCarousel from "@/components/home/FanartCarousel";
import FanartCarouselCard from "@/components/home/FanartCarouselCard";

function Hero() {
  return (
    <div className={styles.hero}>
      <p className={styles.p1}>
        <span style={{ color: "#E43332" }}>Welcome</span> to the official
        website of
      </p>
      <p className={styles.title}>
        <strong>MANGA & ANIME</strong> <br />
        SOCIETY KHARAGPUR
      </p>
      <p className={styles.description}>
        We are a community that is dedicated to anime and related content. We
        aim to spread our passion and love for anime, manga, and related media.
        We create content ranging from AMVs and reels to artwork and sketches,
        and hold crowd events like anime quizzes.
      </p>
      <div className={styles.buttons}>
        <div className={styles.button1}>About us</div>
        <div className={styles.button2}>
          Checkout our latest newsletter
          <div>
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.50006H13M13 7.50006L8 1.00006M13 7.50006L8 14.0001"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentEvents({ content = [], currentItemIndex, onClickItem }) {
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
          <svg
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66667 0.5C6.25779 0.5 5.86566 0.662425 5.57654 0.951543C5.28743 1.24066 5.125 1.63279 5.125 2.04167V3.58487C3.64346 3.60646 3.05917 3.78375 2.47179 4.09825C1.85109 4.42684 1.3435 4.93442 1.01492 5.55512C0.678834 6.18258 0.5 6.80541 0.5 8.52437V24.8506C0.5 26.568 0.678834 27.1924 1.01492 27.8199C1.351 28.4473 1.84433 28.9407 2.47179 29.2767C3.09925 29.6128 3.72208 29.7917 5.44104 29.7917H23.309C25.0264 29.7917 25.6508 29.6128 26.2782 29.2767C26.9057 28.9407 27.399 28.4473 27.7351 27.8199C28.0712 27.1924 28.25 26.5696 28.25 24.8506V8.52437C28.25 6.80541 28.0712 6.18258 27.7351 5.55512C27.4065 4.93442 26.8989 4.42684 26.2782 4.09825C25.6908 3.78375 25.1065 3.60646 23.625 3.58333V2.04167C23.625 1.63279 23.4626 1.24066 23.1735 0.951543C22.8843 0.662425 22.4922 0.5 22.0833 0.5C21.6745 0.5 21.2823 0.662425 20.9932 0.951543C20.7041 1.24066 20.5417 1.63279 20.5417 2.04167V3.58333H8.20833V2.04167C8.20833 1.63279 8.04591 1.24066 7.75679 0.951543C7.46767 0.662425 7.07554 0.5 6.66667 0.5ZM3.58333 11.2917V24.8506C3.58333 25.5089 3.61262 25.9205 3.65887 26.1595C3.67737 26.252 3.68508 26.2736 3.73442 26.3661C3.7753 26.4495 3.84246 26.5172 3.92558 26.5588C4.01808 26.6066 4.03812 26.6143 4.13217 26.6328C4.37112 26.679 4.78275 26.7083 5.44104 26.7083H23.309C23.9672 26.7083 24.3789 26.679 24.6178 26.6328C24.6911 26.6219 24.7614 26.5962 24.8244 26.5572C24.9079 26.5164 24.9756 26.4492 25.0171 26.3661C25.0556 26.303 25.0807 26.2327 25.0911 26.1595C25.1374 25.9205 25.1667 25.5089 25.1667 24.8506L25.1728 11.2917H3.58333ZM17.0729 17.4583C16.7663 17.4583 16.4722 17.5801 16.2553 17.797C16.0385 18.0138 15.9167 18.3079 15.9167 18.6146V22.4687C15.9167 23.107 16.4347 23.625 17.0729 23.625H20.9271C21.2337 23.625 21.5278 23.5032 21.7447 23.2863C21.9615 23.0695 22.0833 22.7754 22.0833 22.4687V18.6146C22.0833 18.3079 21.9615 18.0138 21.7447 17.797C21.5278 17.5801 21.2337 17.4583 20.9271 17.4583H17.0729Z"
              fill="white"
              stroke="white"
            />
          </svg>
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
          <svg
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66667 0.5C6.25779 0.5 5.86566 0.662425 5.57654 0.951543C5.28743 1.24066 5.125 1.63279 5.125 2.04167V3.58487C3.64346 3.60646 3.05917 3.78375 2.47179 4.09825C1.85109 4.42684 1.3435 4.93442 1.01492 5.55512C0.678834 6.18258 0.5 6.80541 0.5 8.52437V24.8506C0.5 26.568 0.678834 27.1924 1.01492 27.8199C1.351 28.4473 1.84433 28.9407 2.47179 29.2767C3.09925 29.6128 3.72208 29.7917 5.44104 29.7917H23.309C25.0264 29.7917 25.6508 29.6128 26.2782 29.2767C26.9057 28.9407 27.399 28.4473 27.7351 27.8199C28.0712 27.1924 28.25 26.5696 28.25 24.8506V8.52437C28.25 6.80541 28.0712 6.18258 27.7351 5.55512C27.4065 4.93442 26.8989 4.42684 26.2782 4.09825C25.6908 3.78375 25.1065 3.60646 23.625 3.58333V2.04167C23.625 1.63279 23.4626 1.24066 23.1735 0.951543C22.8843 0.662425 22.4922 0.5 22.0833 0.5C21.6745 0.5 21.2823 0.662425 20.9932 0.951543C20.7041 1.24066 20.5417 1.63279 20.5417 2.04167V3.58333H8.20833V2.04167C8.20833 1.63279 8.04591 1.24066 7.75679 0.951543C7.46767 0.662425 7.07554 0.5 6.66667 0.5ZM3.58333 11.2917V24.8506C3.58333 25.5089 3.61262 25.9205 3.65887 26.1595C3.67737 26.252 3.68508 26.2736 3.73442 26.3661C3.7753 26.4495 3.84246 26.5172 3.92558 26.5588C4.01808 26.6066 4.03812 26.6143 4.13217 26.6328C4.37112 26.679 4.78275 26.7083 5.44104 26.7083H23.309C23.9672 26.7083 24.3789 26.679 24.6178 26.6328C24.6911 26.6219 24.7614 26.5962 24.8244 26.5572C24.9079 26.5164 24.9756 26.4492 25.0171 26.3661C25.0556 26.303 25.0807 26.2327 25.0911 26.1595C25.1374 25.9205 25.1667 25.5089 25.1667 24.8506L25.1728 11.2917H3.58333ZM17.0729 17.4583C16.7663 17.4583 16.4722 17.5801 16.2553 17.797C16.0385 18.0138 15.9167 18.3079 15.9167 18.6146V22.4687C15.9167 23.107 16.4347 23.625 17.0729 23.625H20.9271C21.2337 23.625 21.5278 23.5032 21.7447 23.2863C21.9615 23.0695 22.0833 22.7754 22.0833 22.4687V18.6146C22.0833 18.3079 21.9615 18.0138 21.7447 17.797C21.5278 17.5801 21.2337 17.4583 20.9271 17.4583H17.0729Z"
              fill="white"
              stroke="white"
            />
          </svg>
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
          <svg
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66667 0.5C6.25779 0.5 5.86566 0.662425 5.57654 0.951543C5.28743 1.24066 5.125 1.63279 5.125 2.04167V3.58487C3.64346 3.60646 3.05917 3.78375 2.47179 4.09825C1.85109 4.42684 1.3435 4.93442 1.01492 5.55512C0.678834 6.18258 0.5 6.80541 0.5 8.52437V24.8506C0.5 26.568 0.678834 27.1924 1.01492 27.8199C1.351 28.4473 1.84433 28.9407 2.47179 29.2767C3.09925 29.6128 3.72208 29.7917 5.44104 29.7917H23.309C25.0264 29.7917 25.6508 29.6128 26.2782 29.2767C26.9057 28.9407 27.399 28.4473 27.7351 27.8199C28.0712 27.1924 28.25 26.5696 28.25 24.8506V8.52437C28.25 6.80541 28.0712 6.18258 27.7351 5.55512C27.4065 4.93442 26.8989 4.42684 26.2782 4.09825C25.6908 3.78375 25.1065 3.60646 23.625 3.58333V2.04167C23.625 1.63279 23.4626 1.24066 23.1735 0.951543C22.8843 0.662425 22.4922 0.5 22.0833 0.5C21.6745 0.5 21.2823 0.662425 20.9932 0.951543C20.7041 1.24066 20.5417 1.63279 20.5417 2.04167V3.58333H8.20833V2.04167C8.20833 1.63279 8.04591 1.24066 7.75679 0.951543C7.46767 0.662425 7.07554 0.5 6.66667 0.5ZM3.58333 11.2917V24.8506C3.58333 25.5089 3.61262 25.9205 3.65887 26.1595C3.67737 26.252 3.68508 26.2736 3.73442 26.3661C3.7753 26.4495 3.84246 26.5172 3.92558 26.5588C4.01808 26.6066 4.03812 26.6143 4.13217 26.6328C4.37112 26.679 4.78275 26.7083 5.44104 26.7083H23.309C23.9672 26.7083 24.3789 26.679 24.6178 26.6328C24.6911 26.6219 24.7614 26.5962 24.8244 26.5572C24.9079 26.5164 24.9756 26.4492 25.0171 26.3661C25.0556 26.303 25.0807 26.2327 25.0911 26.1595C25.1374 25.9205 25.1667 25.5089 25.1667 24.8506L25.1728 11.2917H3.58333ZM17.0729 17.4583C16.7663 17.4583 16.4722 17.5801 16.2553 17.797C16.0385 18.0138 15.9167 18.3079 15.9167 18.6146V22.4687C15.9167 23.107 16.4347 23.625 17.0729 23.625H20.9271C21.2337 23.625 21.5278 23.5032 21.7447 23.2863C21.9615 23.0695 22.0833 22.7754 22.0833 22.4687V18.6146C22.0833 18.3079 21.9615 18.0138 21.7447 17.797C21.5278 17.5801 21.2337 17.4583 20.9271 17.4583H17.0729Z"
              fill="white"
              stroke="white"
            />
          </svg>
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

function FanartSection() {
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

export default function Home() {
  const recentItems = recentContent.slice(0, 5);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  return (
    <div className={styles.home}>
      <Hero />
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
    </div>
  );
}
