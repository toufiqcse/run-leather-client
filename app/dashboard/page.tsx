"use client";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import BreadCrumb from "../components/global/BreadCrumbs";
import Sidebar from "./sidebar/page";

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
          <Sidebar show={showSidebar} onClose={closeProfile} />
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
