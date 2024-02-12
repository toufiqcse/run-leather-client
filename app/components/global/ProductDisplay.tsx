import Link from "next/link";
const ProductDisplay = (datas: any) => {
  const rec_data = Object.values(datas);
  return (
    <>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 my-5">
        {rec_data.map((data: any) => (
          <div key={data.id} className=" px-3">
            <Link href={`/category/${data?.url}`}>
              <div className="img">
                <img src={data.img} className="" alt={data.name} />
              </div>
              <div className="title text-sm text-black hover:text-red-500">
                <span>{data.name}</span>
              </div>
              <div className="price ">
                <span className="line-through text-black">৳{data.price}</span>{" "}
                &nbsp; <span className="text-red-600">৳{data.dis_price}</span>
              </div>
              <div className="link w-full py-1 bg-orange-500 text-[18px] text-white text-center">
                <button>{"Add to Cart"}</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductDisplay;
