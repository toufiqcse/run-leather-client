"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import BreadCrumb from "../components/global/BreadCrumbs";
import { dashboardLink } from "../global_links/global";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openProfile = () => {
    setShowSidebar(true);
  };
  const closeProfile = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <BreadCrumb category_name="Dashboard" />
      <div className="mx-auto container px-3 md:px-0 my-5">
        <button
          className="mb-3 bg-slate-600 px-3 py-2 rounded-md text-white font-semibold outline-none md:hidden"
          onClick={openProfile}
        >
          Profile
        </button>
        <div className="grid md:grid-cols-3 gap-4">
          {/* sidebar */}
          <>
            <div className="border border-[#bbb] rounded-lg px-3 py-2 hidden md:block">
              <div className="flex flex-col justify-start items-center">
                {/* user info */}
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"https://runleatherbd.com/public/backend/img/user.jpg"}
                    alt="profile"
                    width={100}
                    height={0}
                    className="max-w-full rounded-full"
                  />

                  <>
                    <h2
                      className={`text-xl my-3 ${
                        showSidebar ? "text-white " : "text-[#333]"
                      } font-semibold`}
                    >
                      Toufiqul Isalm
                    </h2>
                    <h2
                      className={`text-[17px] ${
                        showSidebar ? "text-white " : "text-[#333]"
                      } font-semibold`}
                    >
                      01965087999
                    </h2>
                  </>
                </div>

                <hr className=" w-1/2  border mt-2 border-[#eee]" />
              </div>
              <div className="mt-4 items-start">
                {dashboardLink.map((dashInfo) => (
                  <div key={dashInfo.id} className="mb-2">
                    <Link
                      href={dashInfo?.path}
                      className="inline-flex text-[18px] hover:text-[#c30909] transition duration-300 mb-1 justify-start items-center gap-1"
                    >
                      {dashInfo?.icon}
                      {dashInfo?.title}
                    </Link>
                    <hr className=" w-full border mt-2 border-[#eee]" />
                  </div>
                ))}
              </div>
            </div>
            {showSidebar && (
              <div className="fixed top-0 left-0 w-2/3 h-full flex items-center justify-start">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-800 "></div>
                <div className="z-10 px-3 w-full transform transition-transform duration-500 translate-x-0">
                  <div className="border relative border-[#bbb] rounded-lg px-3 py-2">
                    <div className="flex flex-col justify-start items-center">
                      {/* <UserInfo show={showSidebar} /> */}
                      <>
                        <div className="flex flex-col justify-center items-center">
                          <Image
                            src={
                              "https://runleatherbd.com/public/backend/img/user.jpg"
                            }
                            alt="profile"
                            width={100}
                            height={0}
                            className="max-w-full rounded-full"
                          />

                          <>
                            <h2
                              className={`text-xl my-3 ${
                                showSidebar ? "text-white " : "text-[#333]"
                              } font-semibold`}
                            >
                              Toufiqul Isalm
                            </h2>
                            <h2
                              className={`text-[17px] ${
                                showSidebar ? "text-white " : "text-[#333]"
                              } font-semibold`}
                            >
                              01965087999
                            </h2>
                          </>
                        </div>
                      </>
                      <button
                        className="absolute top-3 bg-slate-400 rounded-full w-[30px] h-[30px] outline-none right-3 text-red-700 font-bold text-2xl"
                        onClick={closeProfile}
                      >
                        X
                      </button>
                      <hr className="w-1/2 border mt-2 border-[#eee]" />
                    </div>
                    <div className="mt-4 items-start">
                      {dashboardLink.map((dashInfo) => (
                        <div key={dashInfo.id} className="mb-2">
                          <Link
                            href={dashInfo?.path}
                            className="inline-flex text-[18px] hover:text-[#c30909] transition duration-300 mb-1 justify-start items-center gap-1 text-white"
                          >
                            {dashInfo?.icon}
                            {dashInfo?.title}
                          </Link>
                          <hr className="w-full border mt-2 border-[#eee]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
          {/* content section */}
          <div className="col-span-2">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {/* cart*/}
              <div className="flex flex-col justify-center items-center cursor-pointer px-[1rem] py-[2rem] bg-[#198754] text-xl text-slate-100 font-semibold rounded-lg">
                <FaShoppingBag />
                <span className="my-2"> {"0"} Product</span>
                <span>Cart</span>
              </div>
              {/* save */}
              <div className="flex flex-col justify-center items-center cursor-pointer px-[1rem] py-[2rem] bg-[#DC3545] text-xl text-slate-100 font-semibold rounded-lg">
                <FaShoppingBag />
                <span className="my-2"> {"0"} Product</span>
                <span>Save</span>
              </div>
              {/* orders */}
              <div className="flex flex-col justify-center items-center cursor-pointer px-[1rem] py-[2rem] bg-blue-700 text-xl text-slate-100 font-semibold rounded-lg">
                <FaShoppingBag />
                <span className="my-2"> {"0"} Product</span>
                <span>Ordered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
