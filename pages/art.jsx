import YearCarouselGroup from "@/components/art/YearCarousel";
import HeroBanner from "@/components/HeroBanner";

export default function Art() {
  return (
    <>
      <div>
        <HeroBanner
          heroTitle={"Checkout Our Talented Artists"}
          heroContent={
            "We feature a diverse range of work from talented artists within our society. From traditional to digital art, each piece reflects unique creativity and vision."
          }
          buttonContent={"Checkout our content on Instagram"}
          buttonURL={"#"}
        />
        <YearCarouselGroup />
      </div>
    </>
  );
}
