"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

const CartPriceCount = ({ item }) => {
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

  return (
    <div className="flex items-center gap-6">
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
      <p className="text-2xl font-bold text-primary">$ {item?.price * count}</p>
      <button className="bg-white p-2 rounded-xl hover:scale-110 duration-300">
        <FaTrash className="text-danger text-2xl" />
      </button>
    </div>
  );
};

export default CartPriceCount;
