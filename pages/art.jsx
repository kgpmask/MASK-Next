import HeroBanner from "@/components/HeroBanner";
import React, { useEffect, useState } from "react";
import SeasonFilter from "@/components/art/SeasonFilter";
import Carousel from "@/components/art/ArtCarousel"
import ArtCarouselCard from "@/components/art/ArtCarosuelCard";
import styles from "@/styles/art/Arts.module.css";
import { connectDatabase } from "@/database/database";
import Post from "@/database/schemas/Post";

function getSeason(month) {
  if (month >= 2 && month <= 4) return "spring";   // Mar–May
  if (month >= 5 && month <= 7) return "summer";   // Jun–Aug
  if (month >= 8 && month <= 10) return "autumn";  // Sep–Nov
  return "winter";                                 // Dec–Feb
}

export async function getServerSideProps() {
  await connectDatabase();
  let artworksRaw = await Post.find({ type: 'art' }, { _id: 0, metadata: 0, type: 0, page:0, hype: 0, __v: 0}).sort({ date: -1 }).lean();
  artworksRaw = artworksRaw.map(item => ({
    ...item,
    date: item.date instanceof Date ? item.date.toISOString() : item.date,
  }));

  const artworks = artworksRaw.map(item => {
    const d = new Date(item.date);

    return {
      src: `/assets/art/${item.link}`,
      year: String(d.getFullYear()),
      title: item.attr?.join(", ") || "",
      description: item.name,
      season: getSeason(d.getMonth()),
    };
  });
  return { props: { artworks } };
}

// custom hook to get window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function YearCarousel({ year, artworks }) {
  const [selectedSeason, setSelectedSeason] = useState("spring");
  const { width } = useWindowSize();
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      if (width >= 1024) return 3;
      if (width >= 640) return 2;
      return 1;
    }
    return 1;
  });

  useEffect(() => {
    if (typeof width !== "number") return;
    if (width >= 1024) {
      setItemsPerPage(3);
    } else if (width >= 640) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  }, [width]);
  const filteredArtworks = artworks.filter(
    (art) => art.year === year && art.season === selectedSeason
  );

  // Fill blank slides if fewer than 3 images
  const fillCount = Math.max(itemsPerPage - filteredArtworks.length, 0); // Ensure non-negative length
  const carouselItems = [...filteredArtworks, ...Array(fillCount).fill(null)];

  return (
    <div className={styles.container}>
      <div className={styles["filter-container"]}>
        <SeasonFilter
          year={year}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
        />
      </div>

      <Carousel
        Template={ArtCarouselCard}
        showNavigator={true}
        numPerPage={itemsPerPage}
        discrete={false}
        data={carouselItems}
        maxWidth={"95vw"}
      />
    </div>
  );
}

function YearCarouselGroup({ artworks }) {
  // Extract unique years from artworks data
  const years = [...new Set(artworks.map((art) => art.year))].sort(
    (a, b) => b - a
  );

  return (
    <div>
      {years.map((year) => (
        <YearCarousel key={year} year={year} artworks={artworks}/>
      ))}
    </div>
  );
}

export default function ArtPage({ artworks }) {
  return (
    <>
      <div>
        <HeroBanner
          heroTitle={"Checkout Our Talented Artists"}
          heroContent={
            "We feature a diverse range of work from talented artists within our society. From traditional to digital art, each piece reflects unique creativity and vision."
          }
          buttonContent={"Checkout our content on Instagram"}
          buttonURL={"https://www.instagram.com/maskiitkgp"}
        />
        <YearCarouselGroup artworks={artworks}/>
      </div>
    </>
  );
}
