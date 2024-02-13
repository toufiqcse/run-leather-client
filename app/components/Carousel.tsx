"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carousel_images } from "../global_links/global";

const BrandCarousel = () => {
  return (
    <div className="w-full md:pt-10 lg:pt-0 md:mb-20 z-0">
      <style jsx>{`
        /* Add any custom styles here */
        .carousel-wrapper {
          position: relative;
          z-index: 0;
        }

        .carousel-container {
          position: relative; /* Use position: relative instead of position: static */
          width: 100%;
        }

        .carousel-image {
          width: 100%;
          height: auto;
        }
      `}</style>

      <div className="w-full md:pt-10 lg:pt-0 md:mb-20 carousel-wrapper">
        <Carousel
          className="carousel-container"
          stopOnHover
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
        >
          {carousel_images.map((item) => (
            <div key={item.img} className="z-0">
              <img
                className="carousel-image max-w-full z-0"
                src={item.img}
                alt={item.img}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandCarousel;
