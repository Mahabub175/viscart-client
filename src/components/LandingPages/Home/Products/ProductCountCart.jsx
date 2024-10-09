"use client";

import { IconSubmitButton } from "@/components/Reusable/Button/CustomButton";
import { Button } from "antd";
import { useState } from "react";
import { FaPlus, FaMinus, FaCartShopping } from "react-icons/fa6";
import { toast } from "sonner";

const ProductCountCart = ({ item, single }) => {
  const [count, setCount] = useState(1);

  const handleCount = (action) => {
    if (action === "increment") {
      setCount((prev) => prev + 1);
    } else if (action === "decrement") {
      if (count > 0) {
        setCount((prev) => prev - 1);
      } else {
        toast.error("Product Count cannot be less than zero");
      }
    }
  };

  const handleSubmit = () => {
    const toastId = toast.loading("Adding to cart");
    if (count < 1) {
      toast.error(`Please select at least 1 ${item?.name} to add`, {
        invert: true,
        id: toastId,
      });
      return;
    }
    setTimeout(() => {
      toast.success(`Added ${count} ${item?.name} to cart`, { id: toastId });
    }, 2000);
  };

  return (
    <div
      className={`mt-5 lg:mt-10 ${
        single
          ? "gap-5 flex flex-col lg:flex-row items-center"
          : "flex items-center justify-between"
      }`}
    >
      <div className="flex items-center gap-3 border border-primaryLight rounded-xl p-1.5">
        <button
          className="cursor-pointer bg-primaryLight p-2 rounded text-xl"
          onClick={() => handleCount("decrement")}
        >
          <FaMinus />
        </button>
        <span className="text-base font-bold text-textColor">{count}</span>
        <button
          className="cursor-pointer bg-primaryLight p-2 rounded text-xl"
          onClick={() => handleCount("increment")}
        >
          <FaPlus />
        </button>
      </div>
      <IconSubmitButton
        func={handleSubmit}
        text={"Add"}
        icon={FaCartShopping}
      />
      {single && (
        <IconSubmitButton
          func={handleSubmit}
          text={"Buy Now"}
          icon={FaCartShopping}
        />
      )}
    </div>
  );
};

export default ProductCountCart;
