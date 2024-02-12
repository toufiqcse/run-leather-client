import Link from "next/link";

const DropDownLink = ({ dropDownMenu }) => {
  return (
    <>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] menu px-4 py-2 text-black bg-white shadow-md  w-52 mt-8 border border-[#eee] transition duration-500"
      >
        <>
          {dropDownMenu.map((dropdown, i) => (
            <div key={i}>
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
  );
};

export default DropDownLink;
