"use client";
import About from "@/app/components/About/page";
import BreadCrumb from "@/app/components/global/BreadCrumbs";
import ProductDisplay from "@/app/components/global/ProductDisplay";
import {
  abouts,
  bag,
  belt,
  shoes,
  slippers,
  wallet,
} from "@/app/global_links/global";
import { usePathname } from "next/navigation";

export default function ProductName() {
  const pathname = usePathname().split("/")[2];
  return (
    <>
      <BreadCrumb category={"category"} category_name={pathname} />
      {pathname == "slippers" ? (
        <ProductDisplay {...slippers} />
      ) : pathname == "shoes" ? (
        <ProductDisplay {...shoes} />
      ) : pathname == "belt" ? (
        <ProductDisplay {...belt} />
      ) : pathname == "bag" ? (
        <ProductDisplay {...bag} />
      ) : pathname == "about" ? (
        <About {...abouts} />
      ) : pathname == "loafers" ? (
        <ProductDisplay {...shoes} />
      ) : pathname == "mocashion" ? (
        <ProductDisplay {...shoes} />
      ) : (
        <ProductDisplay {...wallet} />
      )}
    </>
  );
}
