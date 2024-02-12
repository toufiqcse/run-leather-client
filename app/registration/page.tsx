import Link from "next/link";
import BreadCrumb from "../components/global/BreadCrumbs";

const Registration = () => {
  return (
    <>
      <BreadCrumb category_name="Registration" />
      <div className="px-3 md:px-0">
        <div className="mx-auto my-5 w-full  md:px-0  md:max-w-2xl border border-[#bbb]  rounded-md shadow-md">
          <h1 className="text-xl text-[#555] font-bold my-3 text-center">
            Create a new account
          </h1>
          {/* form */}
          <form className="px-3 mb-0">
            {/* name */}
            <div className="mb-4">
              <div className="mb-1">
                <label htmlFor="name">Name</label>
                <span className="text-red-800 font-bold ml-1 text-[16px]">
                  *
                </span>
              </div>
              <input
                type="text"
                name="name"
                className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe] focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* phone */}
            <div className="mb-4">
              <div className="mb-1">
                <label htmlFor="name">Phone</label>
                <span className="text-red-800 font-bold ml-1 text-[16px]">
                  *
                </span>
              </div>
              <input
                type="text"
                inputMode="numeric"
                name="number"
                className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe]  "
                autoComplete="off"
              />
            </div>
            {/* password */}
            <div className="mb-4">
              <div className="mb-1">
                <label htmlFor="name">Password</label>
                <span className="text-red-800 font-bold ml-1 text-[16px]">
                  *
                </span>
              </div>
              <input
                type="password"
                name="password"
                className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe] focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* confirm pass */}
            <div className="mb-6">
              <div className="mb-1">
                <label htmlFor="name">Confirm Password</label>
                <span className="text-red-800 font-bold ml-1 text-[16px]">
                  *
                </span>
              </div>
              <input
                type="password"
                name="confirmPassword"
                className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe] focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="  w-full  h-[2.4rem] p-[0.5rem] hover:bg-[#3e4143] bg-[#212529] rounded-lg focus:outline-[#86b7fe] focus:border-blue-500 text-white font-semibold  transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center my-2">
            <h1 className="text-xl font-semibold my-4 text-center">
              Already have an account?
            </h1>
            <Link href={"/login"} className="text-2xl font-semibold ml-2">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
