"use client";
import { categories } from "../global_links/global";
import MenuCategori from "./Navbar/MenuCategori";
const Dropdowns = () => {
  return (
    <>
      <div className="hidden  bg-orange-500 text-white font-bold md:flex md:gap-10 justify-center items-center py-1">
        {categories.map((cat, i) => (
          <MenuCategori cat={cat} key={i} />
        ))}
      </div>
    </>
  );
};
export default Dropdowns;
