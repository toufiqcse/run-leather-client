import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="md:grid  hidden">
          <div className="grid grid-cols-4 p-4">
            <div className="contact grid justify-center">
              <div className="title text-white">
                <h1>Contact Us</h1>
              </div>
              <div className="ape ml-4 -mt-[75%]">
                <ul>
                  <li>
                    <span className="apes text-slate-400"> Address:</span>{" "}
                    <br />
                    <span className="text-white">
                      House-51/1,Senpara, <br />
                      Mirpur-10, Dhaka-1216
                    </span>
                  </li>
                  <li>
                    <span className="apes text-slate-400"> Phone:</span> <br />
                    <span className="text-white">+(88) +8801848375505</span>
                  </li>
                  <li>
                    <span className="apes text-slate-400">Email:</span> <br />
                    <span className="text-white">support@runleatherbd.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="quick_links">
              <div className="title text-white">
                <h1>Quick Links</h1>
              </div>
              <div className="ape ml-4 text-white text-[12px] font-semibold">
                <ul>
                  <Link href={"/about"}>
                    <li>About us</li>
                  </Link>
                  <Link href={"/contact"}>
                    <li>Contact us</li>
                  </Link>
                  <Link href={"/termscondition"}>
                    <li>Terms & Conditions</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="image">
              <Image
                src={"https://runleatherbd.com/public/member.jfif"}
                width={200}
                height={100}
                alt={"Membership"}
              />
            </div>
            <div className="follow">
              <div className="title text-white">
                <h1>Follow Us</h1>
              </div>
              <div className="image">
                <Image
                  src={"/img/relations/rel1.png"}
                  width={300}
                  height={100}
                  alt={"Membership"}
                />
              </div>
            </div>
          </div>

          <div className="uppercase text-white text-center my-5 font-bold text-sm">
            <span>COPYRIGHT © 2022 - ITSTATION.TECH</span>
          </div>
        </div>
        {/* for mobile view */}
        <div className=" md:hidden ">
          <div className="flex flex-col justify-center items-center px-6 py-8">
            <h1 className="text-white ">COPYRIGHT © 2022 - ITSTATION.TECH</h1>
            <div className="flex justify-center items-center gap-4 text-white mt-3">
              <Link href={"/about"}>About us</Link>
              <Link href={"/contact"}>Contact us</Link>
              <Link href={"/termscondition"}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
