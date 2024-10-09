import { categoryData } from "@/assets/data/categoryData";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-bold text-center lg:text-start">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-6 mt-10">
        {categoryData?.map((item, i) => (
          <div
            key={i}
            className="bg-primaryLight rounded-xl text-center w-full py-6 border-2 border-primary hover:bg-primary hover:border-2 hover:border-primaryLight duration-300 hover:text-white group flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height
              className="group-hover:scale-110 duration-500"
            />
            <h3 className="font-bold mt-4 text-2xl mb-2">{item.name}</h3>
            <p>{item.quantity}</p>
            <Button
              type="primary"
              className="mt-4 group-hover:!bg-primaryLight group-hover:!text-primary duration-200"
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
