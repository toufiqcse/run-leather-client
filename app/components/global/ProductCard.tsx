"use client";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const ProductCard = ({ datas }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
        className="mySwiper"
      >
        {datas.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="  mx-1 bg-slate-50">
              <Link href={`product/${data.name}`}>
                <div className="img">
                  <img src={data.img} className="" alt={data.name} />
                </div>
                <div className="title text-sm text-black hover:text-red-500">
                  <span>{data.name}</span>
                </div>
                <div className="price ">
                  <span className="line-through text-black">৳{data.price}</span>{" "}
                  &nbsp; <span className="text-red-600">৳{data.dis_price}</span>
                </div>
                <div className="link w-full bg-orange-500 px-2 py-1 text-white text-center">
                  <button>{"অর্ডার করুন"}</button>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCard;
