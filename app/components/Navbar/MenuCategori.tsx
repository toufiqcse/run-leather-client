import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
export default function MenuCategori({ cat }) {
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
      <>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] menu px-4 py-2 text-black bg-white shadow-md  w-52 mt-8 border border-[#eee] transition duration-500"
        >
          <>
            {dropDownMenu.map((dropdown) => (
              <div key={dropdown.id}>
                <div className="flex flex-col items-start mb-2">
                  <Link
                    href={`${dropdown?.href}`}
                    className="text-[#666666] hover:text-[#c30909]"
                  >
                    {dropdown.name}
                  </Link>
                </div>
                <hr />
              </div>
            ))}
          </>
        </div>
      </>
    </div>
  );
}
