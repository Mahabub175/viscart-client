import { myCartData } from "@/assets/data/cartData";
import { categoryOptions } from "@/assets/data/optionData";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import { Button, Form, Input, Select, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import ProfileHover from "./ProfileHover";

const LandingTopHeader = () => {
  const pathname = usePathname();

  const user = true;

  return (
    <div className="lg:flex items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-10 pt-4">
        <Link href={"/"}>
          <p className="text-2xl font-extrabold text-primary mt-1 hidden lg:flex">
            Viscart
          </p>
        </Link>
        <div className="block md:hidden lg:block">
          <CustomForm>
            <Form.Item>
              <Space.Compact>
                <Form.Item
                  name={["category", "category"]}
                  noStyle
                  rules={[{ required: true, message: "Category is required" }]}
                >
                  <Select
                    style={{ width: "10vw" }}
                    placeholder="Select Categories"
                    size="large"
                    options={categoryOptions}
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  name={["category", "name"]}
                  noStyle
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input
                    style={{ width: "20vw", position: "relative" }}
                    placeholder="Search for items..."
                    size="large"
                    allowClear
                  />
                </Form.Item>
                <button className="bg-primary px-5 rounded-r-xl">
                  <FaSearch className="text-2xl font-extrabold text-white" />
                </button>
              </Space.Compact>
            </Form.Item>
          </CustomForm>
        </div>
      </div>
      <div className="lg:-mt-2 lg:flex items-center gap-10 hidden">
        <Link
          href={"/compare"}
          className={`flex items-center gap-2 font-bold ${
            pathname == "/compare"
              ? "text-primary hover:text-primary/70"
              : "text-black hover:text-primary"
          }`}
        >
          <TbArrowsCross className="text-xl" />
          <span>Compare</span>
        </Link>
        {user && (
          <>
            <Link
              href={"/wishlist"}
              className={`flex items-center gap-2 font-bold ${
                pathname == "/wishlist"
                  ? "text-primary hover:text-primary/70"
                  : "text-black hover:text-primary"
              }`}
            >
              <span className="relative">
                <FaRegHeart className="text-xl" />
                <span className="text-sm absolute left-2 -top-3 text-white bg-primary px-1.5 rounded-full">
                  {myCartData?.length}
                </span>
              </span>
              <span>Wishlist</span>
            </Link>
            <Link
              href={"/my-cart"}
              className={`flex items-center gap-3 font-bold ${
                pathname == "/my-cart"
                  ? "text-primary hover:text-primary/70"
                  : "text-black hover:text-primary"
              }`}
            >
              <span className="relative">
                <FaCartPlus className="text-xl" />
                <span className="text-sm absolute left-2 -top-3 text-white bg-primary px-1.5 rounded-full">
                  {myCartData?.length}
                </span>
              </span>
              <span>My Cart</span>
            </Link>
          </>
        )}
      </div>
      <div className="-mt-2 lg:flex items-center gap-4 hidden">
        {user ? (
          <>
            <ProfileHover />
          </>
        ) : (
          <>
            <Link
              href={"/sign-in"}
              className="flex items-center gap-2 text-primary"
            >
              <Button
                style={{
                  padding: "0.5rem 2.5rem 2.0rem 2.5rem",
                  fontWeight: 700,
                  color: "#22C55E",
                }}
                type="default"
              >
                Sign In
              </Button>
            </Link>
            <Link
              href={"/sign-up"}
              className="flex items-center gap-2 text-black "
            >
              <Button
                style={{
                  padding: "0.5rem 2.5rem 2.0rem 2.5rem",
                  fontWeight: 700,
                }}
                type="primary"
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingTopHeader;
