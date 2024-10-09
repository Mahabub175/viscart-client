"use client";

import Image from "next/image";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import banner1 from "@/assets/images/homepage/image2.png";
import banner2 from "@/assets/images/homepage/Group6.png";
import banner3 from "@/assets/images/homepage/Offer2-img.png";
import { useState } from "react";
import dynamic from "next/dynamic";
import popup from "@/assets/images/pop-up.png";

const CustomModal = dynamic(
  () => import("@/components/Reusable/Modal/CustomModal"),
  { ssr: false }
);

const Banner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section>
      <CustomModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Image src={popup} alt="popup" />
      </CustomModal>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="bg-primaryLight rounded-xl w-full border border-primary flex items-center relative lg:h-[400px]">
          <div className="px-5 lg:px-8 space-y-3 py-10">
            <p className="font-semibold space-x-2 text-textColor">
              <span>Exclusive Offer</span>
              <span className="bg-red-200 p-1 text-danger">40% Off</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-orange">100% </span>{" "}
              <span className="text-primary">Organic</span>
            </h2>
            <p className="text-textColor pt-4 pb-2 lg:w-4/6">
              Fresh, natural, and irresistibly delicious - nourishing your body
              and soul with every bite, making each meal a delightful
              experience.
            </p>
            <Button
              type="primary"
              style={{
                padding: "0.5rem 2.5rem 2.0rem 2.5rem",
                fontWeight: 700,
              }}
            >
              Shop Now
            </Button>
          </div>
          <div className="hidden lg:block absolute -bottom-6 -right-20">
            <Image src={banner1} alt="banner" width={500} height priority />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-fit">
          <div className="bg-primaryLight rounded-xl border border-primary flex items-center relative lg:w-[450px]">
            <div className="px-5 space-y-2 py-4">
              <p className="font-semibold space-x-2 text-textColor">
                <span className="bg-red-200 p-1 text-danger">30% Off</span>
              </p>
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Fresh & Green </span>
              </h2>
              <p className="text-textColor lg:w-4/6">
                We deliver organic Vegetables & Fruits
              </p>
              <button className="flex items-center group">
                <span className="font-bold group-hover:text-primary duration-300">
                  Shop Now
                </span>
                <FaArrowRight className="ml-1 group-hover:text-primary group-hover:translate-x-2 duration-300 " />
              </button>
            </div>
            <div className="hidden lg:block absolute -bottom-4 -right-14">
              <Image src={banner2} alt="banner" height={200} priority />
            </div>
          </div>
          <div className="bg-primaryLight rounded-xl border border-primary flex items-center relative lg:w-[450px]">
            <div className="px-5 space-y-2 py-5">
              <p className="font-semibold space-x-2 text-textColor">
                <span className="bg-red-200 p-1 text-danger">30% Off</span>
              </p>
              <h2 className="text-3xl font-bold">
                <span className="text-primary">Fresh & Green </span>
              </h2>
              <p className="text-textColor lg:w-4/6">
                We deliver organic Vegetables & Fruits
              </p>
              <button className="flex items-center group">
                <span className="font-bold group-hover:text-primary duration-300">
                  Shop Now
                </span>
                <FaArrowRight className="ml-1 group-hover:text-primary group-hover:translate-x-2 duration-300 " />
              </button>
            </div>
            <div className="hidden lg:block absolute bottom-0 rounded-xl right-0">
              <Image
                src={banner3}
                alt="banner"
                width
                height={150}
                priority
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
