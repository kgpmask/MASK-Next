import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/home/Home.module.css";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const AMVVideoItems = [
  {
    url: "https://youtu.be/iERYAx3iipw",
  },
  {
    url: "https://www.youtube.com/watch?v=YhVlV_dMoxg",
  },
  {
    url: "https://www.youtube.com/watch?v=D2rnH9XqwvA",
  },
];

export default function AMVSection() {
  const sliderRef = useRef(null);
  const [currentAMVVideoIndex, setCurrentAMVVideoIndex] = useState(0);
  const [playingStates, setPlayingStates] = useState(
    AMVVideoItems.map(() => false)
  );

  const setPlayingState = (idx, state) => {
    setPlayingStates((playingStates) => {
      playingStates[idx] = state;
      return playingStates;
    });
  };

  useEffect(() => {
    const target = sliderRef.current.children[currentAMVVideoIndex];
    sliderRef.current.scrollTo({
      left: target.offsetLeft - sliderRef.current.offsetLeft,
      behavior: "smooth",
    });
    setPlayingStates((playingStates) => playingStates.map(() => false));
    if (setCurrentAMVVideoIndex) {
      setCurrentAMVVideoIndex(currentAMVVideoIndex);
    }
  }, [currentAMVVideoIndex]);

  const moveNext = () =>
    setCurrentAMVVideoIndex((cur) => (cur + 1) % AMVVideoItems.length);
  const movePrev = () =>
    setCurrentAMVVideoIndex(
      (cur) => (cur - 1 + AMVVideoItems.length) % AMVVideoItems.length
    );
  const moveHere = (num) => setCurrentAMVVideoIndex(num);

  return (
    <div className={styles["amv-section"]}>
      <h1>Anime Music Videos</h1>
      <div className={styles["amv-container"]}>
        <Image
          src="/assets/icons/left-arrow.svg"
          alt="left arrow"
          width={45}
          height={45}
          className={styles["amv-nav-arrow"]}
          onClick={movePrev}
        />
        <div className={styles["amv-video-carousel"]} ref={sliderRef}>
          {AMVVideoItems.map((amvVideo, idx) => (
            <div key={idx} className={styles["amv-video"]}>
              <ReactPlayer
                url={amvVideo.url}
                width="100%"
                height="100%"
                controls={true}
                playing={playingStates[idx]}
                onPlay={() => setPlayingState(idx, true)}
                onPause={() => setPlayingState(idx, false)}
              />
            </div>
          ))}
        </div>
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="right arrow"
          width={45}
          height={45}
          className={styles["amv-nav-arrow"]}
          onClick={moveNext}
        />
      </div>
      <div className={styles["amv-navigation-dots"]}>
        {Array.from({ length: AMVVideoItems.length }).map((_, num) =>
          !(num >= currentAMVVideoIndex && num < currentAMVVideoIndex + 1) ? (
            <div
              className={styles.dot}
              key={num}
              onClick={() => moveHere(num)}
            ></div>
          ) : (
            <div
              className={`${styles.dot} ${styles["active-dot"]}`}
              key={num}
            ></div>
          )
        )}
      </div>
    </div>
  );
}
