import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import DropDownLink from "./DropDownLink";

const MenuCategori = ({ cat }) => {
  const dropDownMenu = cat.dropdown;

  return (
    <div tabIndex={0} className="group flex dropdown dropdown-hover ml-3">
      <Link
        href={`/category/${cat?.href}`} // Make sure to include the leading '/'
        role="button"
        className="flex items-center justify-start"
      >
        {cat.title}{" "}
        <span className="ml-3">
          <MdArrowDropDown size={30} />
        </span>
      </Link>

      <DropDownLink dropDownMenu={dropDownMenu} />
    </div>
  );
};

export default MenuCategori;
