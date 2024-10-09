import { Button, Input } from "antd";
import banner1 from "@/assets/images/homepage/image2.png";
import Image from "next/image";
import { LuSend } from "react-icons/lu";

const NewsletterBanner = () => {
  return (
    <section className="py-10">
      <div className="bg-primaryLight rounded-xl w-full border border-primary flex items-center relative lg:h-[400px]">
        <div className="px-10 space-y-3 py-10">
          <h2 className="text-2xl lg:text-6xl font-bold lg:w-4/6">
            Stay home & get your Daily needs from our shop
          </h2>
          <p className="text-textColor pt-4 pb-2 lg:w-4/6">
            Start Your Daily Shopping with Grocery Shop
          </p>
          <div className="flex items-center lg:w-2/6 relative">
            <Input
              style={{
                padding: "0.75rem 2.75rem 0.75rem 2.5rem",
                borderRadius: "9999px",
              }}
              placeholder="Enter your email"
              type="email"
              size="large"
            />
            <LuSend className="text-xl absolute left-3" />
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
              Subscribe
            </Button>
          </div>
        </div>
        <div className="hidden lg:block absolute -bottom-8 -right-24">
          <Image src={banner1} alt="banner" width height={500} priority />
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
