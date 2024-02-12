import GlobalHero from "@/app/components/global/Hero";
import { slippers, top_selling } from "@/app/global_links/global";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaMoneyBill,
  FaMotorcycle,
  FaTruck,
} from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = (datas: any) => {
  const rec_data: any = Object.values(datas)[1];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  console.log(rec_data);

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleChange = (index) => {
    // Your onChange logic here
    console.log(`Carousel slide changed to index: ${index}`);
  };

  const handleClickItem = (index) => {
    // Your onClickItem logic here
    console.log(`Item clicked at index: ${index}`);
  };

  const handleClickThumb = (index) => {
    // Your onClickThumb logic here
    console.log(`Thumb clicked at index: ${index}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1  px-3 md:px-0 shadow-md">
          {/* 1 */}
          <div className="prod_details  my-4">
            <Carousel
              showIndicators={false}
              showArrows={false}
              showStatus={false} // Hide status indicator
              onChange={handleChange}
              onClickItem={handleClickItem}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="thumb-arrow thumb-prev bg-red-500 btn btn-primary"
                  >
                    <FaArrowRight />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="thumb-arrow thumb-next bg-red-700"
                  >
                    Next &#9654;
                  </button>
                )
              }
            >
              <div className="">
                <img
                  src={
                    "https://runleatherbd.com/public/images/product/image/17076725568382CS-32.1.webp"
                  }
                  alt="https://runleatherbd.com/public/images/product/image/17076725568382CS-32.1.webp"
                />
              </div>
              <div>
                <img
                  src={
                    "https://runleatherbd.com/public/images/product/image/17076725568382CS-32.1.webp"
                  }
                  alt="https://runleatherbd.com/public/images/product/image/17076725568382CS-32.1.webp"
                />
              </div>
            </Carousel>
          </div>
          {/* 2 */}
          <>
            <div className="title px-3 w-full  text-xl">
              <h1 className="pb-1">{rec_data.name}</h1>

              <hr className="w-full border" />

              <div className=" flex justify-between items-center py-3">
                <div className="flex items-center  ">
                  <h1 className="line-through mr-2 text-[#949697] text-2xl">
                    &#2547;{rec_data.price}
                  </h1>
                  <h1 className="text-red-500 font-bold text-3xl">
                    <span className="font-bold">৳</span>
                    {rec_data.dis_price}
                  </h1>
                </div>
                <div className="quantity flex justify-center items-center  px-2 py-1 border border-[#000]">
                  <button className="outline-none h-[34px] px-3 py-1">-</button>
                  <div className="border-l border-r border-[#333]">
                    <input
                      type="text"
                      className="w-[55px] h-[34px] border-l-0 border-r-0 placeholder:text-center text-center p-0 text-[#333] border-[#000] outline-none placeholder:text-[#333]"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      spellCheck="false"
                      data-ms-editor="true"
                      min={1}
                      placeholder="1"
                    />
                  </div>
                  <button className="outline-none h-[34px] px-3 py-1">+</button>
                </div>
              </div>
              <hr className="w-full border" />

              {/* <div>
              কালার
            </div> */}

              <div className="my-4">
                <div className="mb-4">
                  <h1 className="mb-1">কালারঃ</h1>
                  <div className="flex justify-start items-center gap-3 ">
                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedColor === "Black"
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                      onClick={() => handleButtonClick("Black")}
                    >
                      Black
                    </button>

                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedColor === "Green"
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                      onClick={() => handleButtonClick("Green")}
                    >
                      Green
                    </button>
                  </div>
                </div>
                <div>
                  <h1 className="mb-1">সাইজঃ</h1>
                  <div className="flex justify-start items-center gap-3 ">
                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedSize === "24" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick("24")}
                    >
                      24
                    </button>

                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedSize === "25" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick("25")}
                    >
                      25
                    </button>
                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedSize === "36" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick("36")}
                    >
                      36
                    </button>
                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedSize === "39" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick("39")}
                    >
                      39
                    </button>
                    <button
                      className={`border border-[#000] md:text-[18px] px-2 font-bold outline-none select-none ${
                        selectedSize === "40" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick("40")}
                    >
                      40
                    </button>
                  </div>
                </div>
              </div>

              <div className=" grid grid-rows-2 md:my-4 my-2 gap-6">
                <button className="md:text-[20px] w-full md:w-[96%] mx-auto cursor-pointer rounded-md py-2 px-5 mb-0 outline-none bg-[#FC8A1A] text-white hover:text-[#333] transition duration-300 border border-[#FC8A1A] hover:border-[#333]">
                  {"অর্ডার করুন"}
                </button>

                <button className="md:text-[20px] w-full md:w-[96%] mx-auto cursor-pointer rounded-md py-2 px-5 mb-0 outline-none bg-[#FA5E2F] text-white hover:text-[#333] transition duration-300 border border-[#FA5E2F] hover:border-[#333]">
                  {"Add to Cart"}
                </button>
              </div>
              <hr className="w-full border" />

              <div className=" grid">
                <div className=" mt-4">
                  <h2 className="text-[16px]">Whatsapp:</h2>
                  <button className="md:text-[26px] w-full md:w-[96%] mx-auto cursor-pointer rounded-md py-4 px-5 mb-0 outline-none bg-[#10AD2E] text-white  ">
                    {"WhatsApp"}
                  </button>
                </div>
              </div>
              <hr className="w-full border mt-2" />
            </div>
          </>
          {/* 3 */}
          <div className=" grid px-10 py-10 h-[50%]">
            <div className="contact border-2 border-[#bdbdbd] px-10 py-10  border-dashed">
              <div className="flex flex-col items-center mb-6">
                <p className="text-2xl font-bold ">বিকাশ নাম্বার</p>
                <div className="flex justify-center items-center">
                  <Image
                    src={"https://runleatherbd.com/public/logob.png"}
                    width={27}
                    height={27}
                    alt=""
                    className="rounded-full mr-2"
                  />
                  <span className="text-xl my-4 font-semibold ">
                    (+88) 01848375505
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-2xl font-bold ">নগদ নাম্বার</p>
                <div className="flex justify-center items-center">
                  <Image
                    src={"https://runleatherbd.com/public/logon.png"}
                    width={30}
                    height={30}
                    alt=""
                    className="rounded-full mr-2"
                  />
                  <span className="text-xl my-4 font-semibold ">
                    (+88) 01848375505
                  </span>
                </div>
              </div>
            </div>

            <div className="delivery_info bg-[#E4E4E4] rounded-md shadow-sm border-2 border-[#eee]  my-5  p-5">
              {/* 1 */}
              <div className="mb-3">
                <div className="flex justify-start items-center mb-1">
                  <strong className="mr-2 font-bold text-xl">
                    <FaMoneyBill />
                  </strong>
                  <span>Cash on Delivery:</span>
                </div>
                <div className="flex justify-start items-center ml-10 text-green-800 font-bold">
                  <span className="mr-2">
                    <FaCheck />
                  </span>
                  <span className=" ">Unavailable</span>
                </div>
              </div>
              {/* 2 */}
              <div className="mb-3">
                <div className="flex justify-start items-center mb-1">
                  <strong className="mr-2 font-bold text-2xl">
                    <FaMotorcycle />
                  </strong>
                  <span>Inside City Delivery:</span>
                </div>
                <div className="flex justify-start items-center ml-10 text-green-800 font-bold">
                  <span className="mr-2">
                    <FaCheck />
                  </span>
                  <span className="">2-3 working days</span>
                </div>
              </div>
              {/* 3 */}
              <div className="mb-3">
                <div className="flex justify-start items-center mb-1">
                  <strong className="mr-2 font-bold text-2xl">
                    <FaTruck />
                  </strong>
                  <span>Outside City Delivery:</span>
                </div>
                <div className="flex justify-start items-center ml-10 text-green-800 font-bold">
                  <strong className="mr-2 font-bold text-xl">
                    <FaCheck />
                  </strong>
                  <span className=" ">3-7 working days</span>
                </div>
              </div>
              {/* 4 */}
              <div className="">
                <div className="flex justify-start items-center mb-1">
                  <strong className="mr-2 font-bold text-xl">
                    <FaArrowsRotate />
                  </strong>
                  <span>Refund Rules:</span>
                </div>
                <div className="flex justify-start items-center ml-10 text-green-800 font-bold">
                  <span className="mr-2">
                    <p>Within 7 Days</p>
                  </span>
                  <span className=" text-black">Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description border shadow-md my-10 p-5">
          <button className="uppercase text-2xl font-semibold group cursor-pointer transition duration-300 flex justify-start flex-col">
            <h1 className="text-[#f20505] font-bold text-[24px]">
              Description
            </h1>
            <hr className="w-40 border mt-2 group-hover:border-[#f20505]" />
          </button>

          <div className="my-14">
            {/* title */}
            <p className="bg-[#EBEBEB] inline">
              Nobabi Design 100% Genuine Leather Shoe RL-11
            </p>
          </div>
          {/* description list */}
          <ul className="">
            <li className="mb-4">• Brand: Run</li>
            <li className="mb-4">• Material: 100% Leather </li>
            <li className="mb-4">• Size: 39,40,41,42,43,44. </li>
            <li className="mb-4">• Sole: Hand Made Sole </li>
            <li className="mb-4">
              • Experience the soft feeling in your every step.{" "}
            </li>
            <li className="mb-4"> • High gripping designed outsole.</li>
            <li className="mb-4">
              {" "}
              • Boost your fashionable looks formal and casual outfits
            </li>
            <li className="mb-4"> • Origin: Bangladesh.</li>
          </ul>
        </div>
        <div className="my-10 shadow-md p-2">
          <GlobalHero title={"Related products"} datas={slippers} />
          <GlobalHero title={"Promotional products"} datas={top_selling} />
        </div>
      </div>
    </>
  );
};
export default ProductDisplay;
