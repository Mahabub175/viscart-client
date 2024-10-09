"use client";

import { myCartData } from "@/assets/data/cartData";
import { IconSubmitButton } from "@/components/Reusable/Button/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaTrash, FaCartPlus } from "react-icons/fa6";
import { toast } from "sonner";

const WishlistDetails = () => {
  const initialCartData = myCartData.map((item) => ({ ...item, count: 1 }));
  const [cartItems, setCartItems] = useState(initialCartData);

  const handleDelete = (product) => {
    const toastId = toast.loading("Removing from wishlist");
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    toast.success(`${product?.name} has been removed from your wishlist`, {
      id: toastId,
    });
  };

  const handleAdd = (product) => {
    const toastId = toast.loading("Adding to cart");
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    toast.success(`${product?.name} has been added to your cart`, {
      id: toastId,
    });
  };

  return (
    <section>
      <div className="w-full">
        <h1 className="text-3xl lg:text-4xl font-bold">Your Wishlist</h1>
        <p className="text-xl font-bold mt-10">{cartItems?.length} Items</p>
        <div className="px-5 my-10">
          {cartItems?.map((item) => (
            <div
              key={item?.id}
              className="mt-6 lg:flex justify-between items-center gap-20 mb-10"
            >
              <div className="flex flex-1 items-center gap-10">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={150}
                  height={150}
                  className="bg-primaryLight p-5 rounded-xl border border-primary"
                />
                <div>
                  <p className="text-2xl font-bold mb-2">{item?.name}</p>
                  <p>Size: 2Kg</p>
                </div>
              </div>
              <div className="flex items-center gap-10 flex-1 mt-10 lg:mt-0">
                <p className="text-2xl font-bold text-primary">
                  ${item?.price}
                </p>
                <p className="text-2xl font-bold">{"-50%"}</p>
              </div>
              <div className="flex gap-6 items-center mt-6 lg:mt-0">
                <button
                  className="bg-white p-2 rounded-xl hover:scale-110 duration-300"
                  onClick={() => handleDelete(item)}
                >
                  <FaTrash className="text-danger text-2xl" />
                </button>
                <button
                  className="bg-primary p-2 rounded-xl hover:scale-110 duration-300"
                  onClick={() => handleAdd(item)}
                >
                  <FaCartPlus className="text-white" />
                </button>
              </div>
            </div>
          ))}
          <Link href="/" className="flex items-center gap-10 justify-center">
            <IconSubmitButton
              text={"Continue Shopping"}
              icon={FaChevronRight}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WishlistDetails;
