import { FaArrowLeft, FaUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { MdDashboard, MdOutlineContactSupport } from "react-icons/md";

export interface ShopCategory {
  name?: string;
  price?: number;
  dis_price?: number;
  id?: number;
  img: string;
}

export const dashboardLink = [
  {
    id: crypto.randomUUID(),
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    id: crypto.randomUUID(),
    title: "Orders",
    path: "/orders",
    icon: <IoNewspaper />,
  },
  {
    id: crypto.randomUUID(),
    title: "Track Orders",
    path: "/tracksorder",
    icon: <FaTruck />,
  },
  {
    id: crypto.randomUUID(),
    title: "Manage Profile",
    path: "/manageprofile",
    icon: <FaUser />,
  },
  {
    id: crypto.randomUUID(),
    title: "Support Ticket",
    path: "/support",
    icon: <MdOutlineContactSupport />,
  },
  {
    id: crypto.randomUUID(),
    title: "Logout",
    path: "/logout",
    icon: <FaArrowLeft />,
  },
];

export const categories = [
  {
    id: crypto.randomUUID(),
    title: "Shoes",
    href: "shoes",
    dropdown: [
      {
        id: crypto.randomUUID(),
        name: "Loafer Shoes",
        href: "#",
      },
      {
        id: crypto.randomUUID(),
        name: "Sandal",
        href: "/sandal",
      },
      {
        id: crypto.randomUUID(),
        name: "Sacchi Shoes",
        href: "#",
      },
    ],
  },

  {
    id: crypto.randomUUID(),
    title: "Wallet",
    href: "wallet",
    dropdown: [
      {
        name: "Wallet",
        href: "#",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Belt",
    href: "belt",
    dropdown: [
      {
        name: "Genuine Leather Belt",
        href: "#",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Bag",
    href: "bag",
    dropdown: [
      {
        name: "Genuine Leather Bag",
        href: "#",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Oxford Shoe",
    href: "oxfordshoe",
    dropdown: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Slippers",
    href: "slippers",
    dropdown: [
      {
        name: "Slippers",
        href: "#",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Sneaker",
    href: "sneakers",
    dropdown: [
      {
        name: "Sneaker",
        href: "#",
      },
    ],
  },
];

export const carousel_images = [
  {
    img: "/img/slider/slider1.png",
  },
  {
    img: "/img/slider/slider2.png",
  },
  {
    img: "/img/slider/slider3.png",
  },
  {
    img: "/img/slider/slider4.png",
  },
  {
    img: "/img/slider/slider5.png",
  },
];
export const shop_category = [
  {
    id: 1,
    name: "Shoes",
    img: "/img/category/cat1.webp",
  },
  {
    id: 2,
    name: "Mocashion",
    img: "/img/category/cat2.webp",
  },
  {
    id: 3,
    name: "Loafers",
    img: "/img/category/cat3.webp",
  },
  {
    id: 4,
    name: "Slippers",
    img: "/img/category/cat4.webp",
  },
  {
    id: 5,
    name: "Bag",
    img: "/img/category/cat5.webp",
  },
  {
    id: 6,
    name: "Belt",
    img: "/img/category/cat6.webp",
  },
  {
    id: 7,
    name: "Wallet",
    img: "/img/category/cat7.webp",
  },
];
export const top_selling = [
  {
    name: "Shoes",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes1.webp",
  },
  {
    name: "Slippers",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers1.webp",
  },
  {
    name: "Belt",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt1.webp",
  },
  {
    name: "Bag",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag1.webp",
  },
  {
    name: "Wallet",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet1.jpg",
  },
  {
    name: "Wallet2",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet2.jpg",
  },
  {
    name: "Wallet3",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet3.jpg",
  },
];

export const shoes = [
  {
    name: "Shoes",
    price: 800,
    dis_price: 699,
    img: "/img/shoes/shoes1.webp",
    color: ["Black", "Pink"],
    size: ["36", "38", "40", "42", "44"],
    sliderImg: [
      {
        id: crypto.randomUUID(),
        imgUrl:
          "https://runleatherbd.com/public/images/product/image/1706620621073801848-375505%20(4).jpg",
      },
      {
        id: crypto.randomUUID(),
        imgUrl:
          "https://runleatherbd.com/public/images/category/1706852806_Oxford.webp",
      },
    ],
  },
  {
    name: "Shoes2",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes2.webp",
  },
  {
    name: "Shoes3",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes3.webp",
  },
  {
    name: "Shoes4",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes4.webp",
  },
  {
    name: "Shoes5",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes5.webp",
  },
  {
    name: "Shoes6",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes6.webp",
  },
  {
    name: "Shoes7",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes7.webp",
    url: "shoe",
  },
  {
    name: "Shoes8",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes8.webp",
  },
  {
    name: "Shoes9",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes9.webp",
  },
  {
    name: "Shoes10",
    price: 700,
    dis_price: 699,
    img: "/img/shoes/shoes10.webp",
  },
];

export const wallet = [
  {
    name: "Wallet",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet1.jpg",
  },
  {
    name: "Wallet2",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet2.jpg",
  },
  {
    name: "Wallet3",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet3.jpg",
  },
  {
    name: "Wallet4",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet4.jpg",
  },
  {
    name: "Wallet5",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet5.jpg",
  },
  {
    name: "Wallet6",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet6.jpg",
  },
  {
    name: "Wallet7",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet7.jpg",
  },
  {
    name: "Wallet8",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet8.jpg",
  },
  {
    name: "Wallet9",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet9.jpg",
  },
  {
    name: "Wallet10",
    price: 700,
    dis_price: 699,
    img: "/img/wallet/wallet10.jpg",
  },
];
export const belt = [
  {
    name: "Belt",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt1.webp",
  },
  {
    name: "Belt2",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt2.webp",
  },
  {
    name: "Belt3",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt3.webp",
  },
  {
    name: "Belt4",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt4.webp",
  },
  {
    name: "Belt5",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt5.webp",
  },
  {
    name: "Belt6",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt6.webp",
  },
  {
    name: "Belt7",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt7.webp",
  },
  {
    name: "Belt8",
    price: 700,
    dis_price: 699,
    img: "/img/belt/belt8.webp",
  },
];
export const bag = [
  {
    name: "Bag",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag1.webp",
  },
  {
    name: "Bag2",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag2.webp",
  },
  {
    name: "Bag3",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag3.webp",
  },
  {
    name: "Bag4",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag4.webp",
  },
  {
    name: "Bag5",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag5.webp",
  },
  {
    name: "Bag6",
    price: 700,
    dis_price: 699,
    img: "/img/bag/bag6.webp",
  },
];
export const slippers = [
  {
    name: "slippers",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers1.webp",
  },
  {
    name: "slippers2",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers2.webp",
  },
  {
    name: "slippers3",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers3.webp",
  },
  {
    name: "slippers4",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers4.webp",
  },
  {
    name: "slippers5",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers5.webp",
  },
  {
    name: "slippers6",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers6.webp",
  },
  {
    name: "Slippers7",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers7.webp",
  },
  {
    name: "Slippers8",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers8.webp",
  },
  {
    name: "Slippers9",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers9.webp",
  },
  {
    name: "Slippers10",
    price: 700,
    dis_price: 699,
    img: "/img/slippers/slippers10.webp",
  },
];

export const abouts = [{}];
