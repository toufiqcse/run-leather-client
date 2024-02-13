"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
// import required modules
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const ProductCariusel = ({ datas }: { datas: any }) => {
  return (
    <>
      <Swiper
        // slidesPerView={2}
        spaceBetween={10}
        navigation={true}
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
                <Image
                  width={10}
                  height={10}
                  loading="lazy"
                  src={data.img}
                  className=""
                  alt={`Product ${data.id}`}
                />
              </Link>
              {console.log(data)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCariusel;
