import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaShoppingCart } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto">
        <div className="flex justify-between  items-center w-full">
          <div className="md:py-4 py-1  md:text-[13px] text-[15px] font-semibold">
            <Marquee speed={70} className="z-0">
              1st B2B Platform in Bangladesh For Leather Industry.
            </Marquee>
          </div>

          <div className="p-2 hidden md:block">
            <ul className="tor flex gap-4 list-none justify-end">
              <Link href={"#"}>
                <li>
                  <FaShoppingCart style={{ marginTop: "2%" }} />
                  &nbsp; Track Order
                </li>
              </Link>
              <Link href={"/login"}>
                <li>
                  <RiAdminLine style={{ marginTop: "2%" }} />
                  &nbsp; Login
                </li>
              </Link>
              <Link href={"/registration"}>
                <li>
                  <RiAdminLine style={{ marginTop: "2%" }} />
                  &nbsp; Registration
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
