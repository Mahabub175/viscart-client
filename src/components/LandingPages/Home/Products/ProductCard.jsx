import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import ProductCountCart from "./ProductCountCart";
import ProductHover from "./ProductHover";

const ProductCard = ({ title, data }) => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold text-center lg:text-start">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 mt-10">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="bg-gray-100 rounded-xl shadow-xl relative group"
          >
            <div className="relative">
              <Image
                src={item?.image}
                alt={item?.name}
                width
                height
                className="object-cover w-full h-full"
              />
              {item?.tag && (
                <p className="absolute top-5 bg-primary px-4 left-0 text-white font-bold rounded-r-xl">
                  {item?.tag}
                </p>
              )}
              <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 group-hover:duration-500 lg:w-1/2 mx-auto">
                <ProductHover item={item} />
              </div>
            </div>
            <div className="px-5 pb-5 mt-4">
              <p className="font-bold mb-2 text-textColor">
                Category: {item?.category}
              </p>
              <div className="flex items-center mt-4 gap-4 font-bold">
                <Rate disabled value={item?.review} allowHalf />({item?.review})
              </div>
              <h2 className="text-2xl font-bold my-4">{item?.name}</h2>
              <div className="flex items-center gap-4">
                <p className="text-primary text-2xl font-bold">
                  ${item?.price}
                </p>
                {item?.discountedPrice && (
                  <p className="text-base font-bold line-through text-textColor">
                    ${item?.price}
                  </p>
                )}
              </div>
              <ProductCountCart item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
