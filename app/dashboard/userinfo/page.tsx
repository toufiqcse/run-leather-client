import Image from "next/image";

export default function UserInfo({ show }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"https://runleatherbd.com/public/backend/img/user.jpg"}
        alt="profile"
        width={100}
        height={0}
        className="max-w-full rounded-full"
      />

      <>
        <h2
          className={`text-xl my-3 ${
            show ? "text-white " : "text-[#333]"
          } font-semibold`}
        >
          Toufiqul Isalm
        </h2>
        <h2
          className={`text-[17px] ${
            show ? "text-white " : "text-[#333]"
          } font-semibold`}
        >
          01965087999
        </h2>
      </>
    </div>
  );
}
