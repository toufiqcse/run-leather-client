import Image from "next/image";
import Link from "next/link";
const ProductDisplay = (datas: any) => {
  const rec_data = Object.values(datas);
  return (
    <div className="container mx-auto  md:px-0">
      <div className="grid md:grid-cols-6 grid-cols-2 gap-2 my-5">
        {rec_data.map((data: any) => (
          <div key={data.id} className=" px-3 w-full">
            <Link href={`/category/${data?.url}`}>
              <div className="img w-full">
                <Image
                  width={100}
                  height={100}
                  src={data.img}
                  className="w-full"
                  alt={data.name}
                />
              </div>
              <div className="title text-sm text-black hover:text-red-500">
                <span>{data.name}</span>
              </div>
              <div className="price ">
                <span className="line-through text-black">৳{data.price}</span>{" "}
                &nbsp; <span className="text-red-600">৳{data.dis_price}</span>
              </div>
              <div className="link w-full bg-orange-500 px-2 py-1 text-white text-center">
                <button>{"অর্ডার করুন"}</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductDisplay;
