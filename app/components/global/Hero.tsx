"use client";
import { ShopCategory } from "@/app/global_links/global";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ProductCard from "./ProductCard";
// import required modules
import "./product.css";
const GlobalHero = ({
  title,
  datas,
}: {
  title: string;
  datas: Array<ShopCategory>;
}) => {
  console.log(title);
  console.log(datas);

  return (
    <>
      <div
        className={`${
          title == "Shop by Category"
            ? "text-center text-orange-500"
            : " text-black dark:text-white"
        } my-2 py-2 `}
      >
        <h1 className="text-[#333] text-[1.6rem]">{title}</h1>
        <hr
          className={`${
            title == "Shop by Category" ? "mx-[43%]" : ""
          } border border-orange-500 `}
        />
      </div>

      {title == "Shop by Category" ? (
        <div className="flex justify-between items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
            className="mySwiper flex "
          >
            {datas.map((data) => (
              <SwiperSlide key={data.id} className="w-full">
                <div className="w-full">
                  <Link href={`category/${data.name?.toLowerCase()}`}>
                    <Image
                      width={100}
                      height={100}
                      loading="lazy"
                      src={data.img}
                      className="w-full"
                      alt={`Product ${data.id}`}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            {console.log("after map", datas)}
          </Swiper>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center h-full">
            <ProductCard datas={datas} />
          </div>
        </>
      )}
    </>
  );
};
export default GlobalHero;
