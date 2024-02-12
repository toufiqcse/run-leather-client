"use client";
import BreadCrumb from "@/app/components/global/BreadCrumbs";
import { bag, belt, shoes, slippers, wallet } from "@/app/global_links/global";
import { usePathname } from "next/navigation";
import ProductDisplay from "./ProductDisp";
export default function Product() {
  const pathname = usePathname().split("/")[2].toLowerCase();

  return (
    <>
      <BreadCrumb category_name={pathname} />
      {pathname == "slippers" ? (
        <ProductDisplay {...slippers} />
      ) : pathname == "shoes" ? (
        <ProductDisplay {...shoes} />
      ) : pathname == "belt" ? (
        <ProductDisplay {...belt} />
      ) : pathname == "wallet" ? (
        <ProductDisplay {...wallet} />
      ) : pathname == "bag" ? (
        <ProductDisplay {...bag} />
      ) : (
        <ProductDisplay {...shoes} />
      )}
    </>
  );
}
