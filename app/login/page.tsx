"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BreadCrumb from "../components/global/BreadCrumbs";

const Login = () => {
  const route = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    // Assuming you have a route named "dashboard"
    route.push("/dashboard");
  };
  return (
    <>
      <BreadCrumb category_name="Login" />
      <div className="mx-auto my-5 max-w-2xl border border-[#bbb]  rounded-md shadow-md">
        <h1 className="text-xl font-bold my-3 text-center text-[#555]">
          Hello Welcome to you Account
        </h1>
        {/* form */}
        <form className="px-3 mb-0" onSubmit={onSubmit}>
          {/* phone */}
          <div className="mb-4">
            <div className="mb-1">
              <label htmlFor="name">Phone</label>
              <span className="text-red-800 font-bold ml-1 text-[16px]">*</span>
            </div>
            <input
              type="text"
              inputMode="numeric"
              name="number"
              className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe] focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* password */}
          <div className="mb-4">
            <div className="mb-1">
              <label htmlFor="name">Password</label>
              <span className="text-red-800 font-bold ml-1 text-[16px]">*</span>
            </div>
            <input
              type="password"
              name="password"
              className="border border-[#ccc] shadow-md block w-full rounded-sm h-[2.35rem] p-[0.5rem] bg-white focus:outline-[#86b7fe] focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-start items-center mb-4">
            <input
              type="checkbox"
              name="checkbox"
              className="mr-1 text-[16px]"
            />
            <span>Remember me !</span>
          </div>

          <button
            type="submit"
            className="  w-full  h-[2.4rem] p-[0.5rem] hover:bg-[#3e4143] bg-[#212529] rounded-lg focus:outline-[#86b7fe] focus:border-blue-500 text-white font-semibold  transition duration-300"
          >
            Sign In
          </button>
        </form>
        <Link
          href={"/forgotpass"}
          className="mt-4 text-[18px] flex justify-center items-center     "
        >
          Forgot your password?
        </Link>
        <div className="flex justify-center items-center ">
          <h1 className="text-xl font-semibold my-4 text-center">
            Need an account
          </h1>
          <Link
            href={"/registration"}
            className="text-2xl font-semibold ml-2 flex justify-center items-center"
          >
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
