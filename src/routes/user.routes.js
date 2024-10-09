import {
  FaHome,
  FaPercentage,
  FaInfoCircle,
  FaHeadphones,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

export const userRoutes = [
  { name: "Home", path: "/", icon: FaHome },
  // {
  //   name: "Store",
  //   path: "/shop",
  //   icon: FaShop,
  //   children: [
  //     { name: "Shop1", path: "/shop1", icon: FaShop },
  //     { name: "Shop2", path: "/shop2", icon: FaShop },
  //   ],
  // },
  { name: "Promotions", path: "/promotions", icon: FaPercentage },
  { name: "About Us", path: "/about-us", icon: FaInfoCircle },
  { name: "Contact Us", path: "/contact-us", icon: FaHeadphones },
  {
    name: "Help & Support",
    path: "/help",
    icon: FaShop,
    children: [
      { name: "Help1", path: "/help1", icon: FaShop },
      { name: "Help2", path: "/help2", icon: FaShop },
    ],
  },
];

export const userSidebarRoutes = [
  {
    name: "Home",
    path: "home",
    icon: FaHome,
  },
  {
    name: "Manage Account",
    icon: FaHome,
    children: [
      {
        name: "My Profile",
        path: "my-profile",
        icon: FaHome,
      },
      {
        name: "Address",
        path: "address",
        icon: FaHome,
      },
      {
        name: "Payment Option",
        path: "payment-option",
        icon: FaHome,
      },
      {
        name: "Gift Card",
        path: "salary-settings",
        icon: FaHome,
      },
    ],
  },
];
