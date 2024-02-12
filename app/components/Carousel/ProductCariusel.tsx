"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// import required modules
import Link from "next/link";
import { Navigation } from "swiper/modules";

const ProductCariusel = ({ datas }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper flex"
      >
        {datas.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex justify-between items-center">
              <Link href={`category/${data.name?.toLowerCase()}`}>
                <img src={data.img} className="" alt={`Product ${data.id}`} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCariusel;
