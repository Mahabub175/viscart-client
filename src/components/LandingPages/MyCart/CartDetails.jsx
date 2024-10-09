"use client";

import { myCartData } from "@/assets/data/cartData";
import {
  IconSubmitButton,
  SubmitButton,
} from "@/components/Reusable/Button/CustomButton";
import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { toast } from "sonner";

const CartDetails = () => {
  const initialCartData = myCartData.map((item) => ({ ...item, count: 1 }));
  const [cartItems, setCartItems] = useState(initialCartData);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      const newSubtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
      setSubtotal(newSubtotal);
    };
    calculateSubtotal();
  }, [cartItems]);

  const handleCount = (itemId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          if (action === "decrement" && item.count <= 1) {
            toast.error("Product count cannot be less than 1");
            return item;
          }
          return {
            ...item,
            count: action === "increment" ? item.count + 1 : item.count - 1,
          };
        }
        return item;
      })
    );
  };
  const handleDelete = (product) => {
    const toastId = toast.loading("Removing from cart");
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
    toast.success(`${product?.name} has been removed from your cart`, {
      id: toastId,
    });
  };

  return (
    <section className="lg:flex items-center justify-between gap-10">
      <div className="w-full">
        <h1 className="text-3xl lg:text-4xl font-bold">Your Cart</h1>
        <p className="text-xl font-bol mt-10">{cartItems?.length} Items</p>
        <div className="px-5 my-10">
          {cartItems?.map((item) => (
            <div
              key={item?.id}
              className="mt-6 lg:flex justify-between items-center mb-10"
            >
              <div className="flex items-center gap-10">
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
              <div className="flex gap-6 items-center mt-6 mb-20 lg:mt-0 lg:mb-0">
                <p className="text-2xl font-bold">$ {item?.price}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 border border-primaryLight rounded-xl p-1.5">
                    <button
                      className="cursor-pointer bg-primaryLight p-2 rounded text-xl"
                      onClick={() => handleCount(item.id, "decrement")}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-base font-bold text-textColor">
                      {item.count}
                    </span>
                    <button
                      className="cursor-pointer bg-primaryLight p-2 rounded text-xl"
                      onClick={() => handleCount(item.id, "increment")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    $ {item?.price * item.count}
                  </p>
                  <button
                    className="bg-white p-2 rounded-xl hover:scale-110 duration-300"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash className="text-danger text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Link href={"/"} className="flex items-center gap-10 justify-center">
            <IconSubmitButton
              text={"Continue Shopping"}
              icon={FaChevronRight}
            />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-bold mb-2">Apply Coupon</h3>
        <p className="text-textColor">Using A Promo Code?</p>
        <div className="flex items-center relative lg:w-5/6 mt-6">
          <Input
            style={{
              padding: "0.75rem 0rem 0.75rem 1.5rem",
              borderRadius: "9999px",
            }}
            placeholder="Enter Your Coupon"
            type="text"
            size="large"
          />
          <Button
            type="primary"
            style={{
              padding: "0.75rem 2.75rem 2.2rem 2.75rem",
              fontWeight: 700,
              borderRadius: "9999px",
              position: "absolute",
              right: 0,
            }}
          >
            Apply Now
          </Button>
        </div>
        <div className="bg-light p-5 rounded-xl mt-10 border border-primary font-bold text-xl space-y-6 mb-10">
          <div className="flex items-center justify-between">
            <p>Shipping Fee</p>
            <p>$ 0.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Sub total</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>$ 0.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Tax</p>
            <p>$ 0.00</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>
        </div>
        <SubmitButton text={"Checkout"} />
      </div>
    </section>
  );
};

export default CartDetails;
