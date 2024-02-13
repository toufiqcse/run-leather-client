import { dashboardLink } from "@/app/global_links/global";
import Link from "next/link";
import UserInfo from "../userinfo/page";

export default function Sidebar({
  show,
  onClose,
}: {
  show: any;
  onClose: any;
}) {
  return (
    <>
      <div className="border border-[#bbb] rounded-lg px-3 py-2 hidden md:block">
        <div className="flex flex-col justify-start items-center">
          <UserInfo />

          <hr className=" w-1/2  border mt-2 border-[#eee]" />
        </div>
        <div className="mt-4 items-start">
          {dashboardLink.map((dashInfo) => (
            <div key={dashInfo.id} className="mb-2">
              <Link
                href={dashInfo?.path}
                className="inline-flex text-[18px] hover:text-[#c30909] transition duration-300 mb-1 justify-start items-center gap-1"
              >
                {dashInfo?.icon}
                {dashInfo?.title}
              </Link>
              <hr className=" w-full border mt-2 border-[#eee]" />
            </div>
          ))}
        </div>
      </div>
      {show && (
        <div className="fixed top-0 left-0 w-2/3 h-full flex items-center justify-start">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-800 "></div>
          <div className="z-10 px-3 w-full transform transition-transform duration-500 translate-x-0">
            <div className="border relative border-[#bbb] rounded-lg px-3 py-2">
              <div className="flex flex-col justify-start items-center">
                <UserInfo show={show} />
                <button
                  className="absolute top-3 bg-slate-400 rounded-full w-[30px] h-[30px] outline-none right-3 text-red-700 font-bold text-2xl"
                  onClick={onClose}
                >
                  X
                </button>
                <hr className="w-1/2 border mt-2 border-[#eee]" />
              </div>
              <div className="mt-4 items-start">
                {dashboardLink.map((dashInfo) => (
                  <div key={dashInfo.id} className="mb-2">
                    <Link
                      href={dashInfo?.path}
                      className="inline-flex text-[18px] hover:text-[#c30909] transition duration-300 mb-1 justify-start items-center gap-1 text-white"
                    >
                      {dashInfo?.icon}
                      {dashInfo?.title}
                    </Link>
                    <hr className="w-full border mt-2 border-[#eee]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
