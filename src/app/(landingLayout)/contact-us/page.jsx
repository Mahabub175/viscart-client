import { aboutUsData } from "@/assets/data/aboutUsData";
import ContactForm from "@/components/LandingPages/ContactUs/ContactForm";
import Image from "next/image";
import React from "react";
import contact from "@/assets/images/contact.png";

const page = () => {
  return (
    <section className="lg:my-10">
      <h1 className="text-2xl lg:text-5xl font-bold mb-2">
        We’d love to hear from you
      </h1>
      <p className="text-textColor">
        Our friendly team is always here to chat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center lg:gap-10">
        {aboutUsData?.map((item, i) => (
          <div
            key={i}
            className="bg-primaryLight p-10 h-[250px] mt-5 lg:mt-10 rounded-xl"
          >
            {React.createElement(item.icon, {
              className: "text-4xl text-white bg-primary p-2 rounded-xl",
            })}
            <div className="space-y-1 mt-6">
              <h3 className="text-2xl font-bold">{item?.name}</h3>
              <p className="text-textColor font-semibold">
                {item?.description}
              </p>
              <p className="text-textColor font-semibold">{item?.contact}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-10 lg:space-y-0 lg:mt-20 lg:flex justify-around items-center gap-10">
        <div className="w-full">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">Contact us</h1>
          <p className="text-textColor">
            Our friendly team is always here to chat.
          </p>
          <ContactForm />
        </div>
        <Image
          src={contact}
          alt="contact image"
          height
          width
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default page;
