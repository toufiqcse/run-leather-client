import { ShopCategory } from "@/app/global_links/global";
import ProductCariusel from "../Carousel/ProductCariusel";
import ProductCard from "./ProductCard";
const GlobalHero = ({
  title,
  datas,
}: {
  title: string;
  datas: Array<ShopCategory>;
}) => {
  return (
    <>
      <div
        className={`  ${
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
          <ProductCariusel datas={datas} />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <ProductCard datas={datas} />
          </div>
        </>
      )}
    </>
  );
};
export default GlobalHero;
