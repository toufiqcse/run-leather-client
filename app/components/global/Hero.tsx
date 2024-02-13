"use client";

import Image from "next/image";
import Link from "next/link";

const GlobalHero = ({ title, datas }) => {
  return (
    <>
      <div
        className={`  ${
          title == "Shop by Category"
            ? "text-center text-orange-500"
            : " text-black dark:text-white"
        } mb-6 mt-4 py-2 font-semibold`}
      >
        <h1 className="text-2xl mb-1">{title}</h1>
        <hr
          className={`${
            title == "Shop by Category" ? "mx-[43%]" : ""
          } border border-orange-500 `}
        />
      </div>
      {title == "Shop by Category" ? (
        <div className="carousel grid grid-cols-2 md:grid-cols-5 w-full gap-6">
          {datas.map((data) => (
            <div key={data.name} className="carousel-item relative w-60 ">
              <Link
                className="w-full"
                href={`category/${data.name?.toLowerCase()}`}
              >
                <Image
                  width={100}
                  height={100}
                  src={data.img}
                  className="px-5 max-w-full"
                  alt="uu"
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className=" carousel grid grid-cols-2 md:grid-cols-5  gap-6">
            {datas.map((data) => (
              <div key={data.id} className="carousel-item relative  ">
                <Link href={`product/${data.name}`} className="w-full">
                  <div className="img ">
                    <Image
                      width={100}
                      height={100}
                      src={data.img}
                      className="w-full"
                      alt={"hhh"}
                    />
                  </div>
                  <div className="title text-sm text-black hover:text-red-500">
                    <span>{data.name}</span>
                  </div>
                  <div className="price ">
                    <span className="line-through text-black">
                      ৳{data.price}
                    </span>{" "}
                    &nbsp;{" "}
                    <span className="text-red-600">৳{data.dis_price}</span>
                  </div>
                  <div className="link w-full bg-orange-500 px-2 py-1 text-white text-center">
                    <button>{"অর্ডার করুন"}</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default GlobalHero;
