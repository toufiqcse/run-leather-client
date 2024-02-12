"use client";
import { categories } from "@/app/global_links/global";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import SearchFiled from "./SearchFiled";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({});

  const handleDropdownNav = (categoryId) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [categoryId]: !prevDropdowns[categoryId],
    }));
  };

  // search
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(true);
  };

  const handleClose = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4  ">
          <div className="px-4 mt-3 mb-[1px] flex md:justify-between justify-start  items-center flex-grow-0">
            {/* menu */}
            <label
              htmlFor="my-drawer"
              className=" drawer-button md:hidden cursor-pointer mr-3"
            >
              <span className="text-4xl">
                <GiHamburgerMenu />
              </span>
            </label>
            <Link href={"/"} className="500px">
              <Image
                src={"/img/logo/run_logo.png"}
                width={100}
                height={100}
                className="w-full"
                priority={true}
                alt={"Run Leather Logo"}
              />
            </Link>
            {/* content */}
            <div className="drawer md:hidden z-10">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">{/* Page content here */}</div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <div className="menu  w-80 min-h-full bg-base-200 text-base-content">
                  <div className=" px-5 py-5 text-white bg-[#E62E04] text-2xl font-medium flex items-center">
                    <span className="mr-1 leading-10">|</span>
                    Categories
                  </div>
                  {/* --------list */}

                  {/* drop down title */}
                  <div>
                    {categories.map((cat) => (
                      <div key={cat.id}>
                        <div
                          tabIndex={0}
                          className="nav_list text-[17px] pl-5 pr-0 cursor-pointer"
                          onClick={() => handleDropdownNav(cat.id)}
                        >
                          <Link href={`/category/${cat?.href}`} className="">
                            {cat?.title}
                          </Link>

                          <button className="text-[15px] px-1 py-1 border border-[#333] text-thin">
                            {dropdowns[cat.id] ? <FaMinus /> : <FaPlus />}
                          </button>
                        </div>
                        <hr />
                        {/* drop down list */}
                        {dropdowns[cat.id] && (
                          <div className="flex flex-col">
                            {/* Render your dropdown content here */}
                            {cat.dropdown.map((dropdownItem) => (
                              <div
                                key={dropdownItem.id}
                                className="pl-8 bg-[#b9d9ed] border-b border-[#bbb] text-black py-1 text-[16px]"
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="text-[#666666] hover:text-[#c30909] block mb-2"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* ---------- */}
                </div>
              </div>
            </div>

            {/* --------------- */}

            {/* search */}
            <div className="md:hidden mr-3">
              {isSearchVisible ? (
                <>
                  {isSearchVisible && <SearchFiled handleClose={handleClose} />}
                </>
              ) : (
                <div className=" bg-white text-black rounded-full p-2 ml-2 text-[14px]">
                  <FaSearch onClick={toggleSearch} />
                </div>
              )}
            </div>

            {/* cart */}
            <div className="cart relative flex items-end md:hidden cursor-pointer">
              <div className="icon ">
                <FaCartPlus size={30} />
              </div>
              <div className="number font-semibold">
                <span className="absolute top-[-10px] right-[-10px] bg-orange-500 px-1.5 rounded">
                  0
                </span>
                <br />
              </div>
            </div>
          </div>

          <div className="search md:grid col-span-2 md:p-4 relative items-center hidden ">
            <input
              type="text"
              className="bg-white p-2 hidden md:block outline-none rounded-lg placeholder:text-black text-black"
              placeholder="Search here..."
            />
            <div className="absolute bg-orange-500 right-0 p-3 ml-2 rounded-tr-[0.5rem] rounded-br-[0.5rem]">
              <FaSearch />
            </div>
          </div>

          {/* for desktop */}
          <div className="md:flex hidden  md:gap-6 text-[12px] justify-end font-semibold p-3 ml-10">
            <div className="contact flex">
              <div className="icon">
                <IoCall size={35} />
              </div>
              <div className="number font-semibold">
                <span>Call Now:</span>
                <br />
                <span>+8801848375505</span>
              </div>
            </div>
            <div className="cart flex">
              <div className="icon">
                <FaCartPlus size={40} />
              </div>
              <div className="number font-semibold">
                <span className="bg-orange-500 px-2 rounded">0</span>
                <br />
                <span>Cart</span>
              </div>
            </div>
          </div>
          {/* for mobile */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
