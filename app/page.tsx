import BrandCarousel from "./components/Carousel";
import GlobalHero from "./components/global/Hero";
import {
  belt,
  shoes,
  shop_category,
  slippers,
  top_selling,
  wallet,
} from "./global_links/global";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <>
      <BrandCarousel />
      <div className="mx-[10%] my-5">
        <GlobalHero title={"Shop by Category"} datas={shop_category} />
        <GlobalHero title={"Top Selling Products"} datas={top_selling} />
        <GlobalHero title={"Shoes"} datas={shoes} />
        <GlobalHero title={"Wallet"} datas={wallet} />
        <GlobalHero title={"Belt"} datas={belt} />
        <GlobalHero title={"Slippers"} datas={slippers} />
      </div>
    </>
  );
}
