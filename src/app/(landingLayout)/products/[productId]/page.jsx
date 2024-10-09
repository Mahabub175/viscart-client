import { allProductData, productData } from "@/assets/data/productData";
import NewsletterBanner from "@/components/LandingPages/Home/NewsletterBanner";
import ProductCard from "@/components/LandingPages/Home/Products/ProductCard";
import ProductCountCart from "@/components/LandingPages/Home/Products/ProductCountCart";
import SmallFeature from "@/components/LandingPages/Home/SmallFeature";
import { Rate } from "antd";
import Image from "next/image";

const page = ({ params }) => {
  const singleProduct = allProductData?.find(
    (item) => item?.id === Number(params?.productId)
  );
  return (
    <section>
      <div className="border border-primary/40 rounded-xl p-5 flex flex-col lg:flex-row items-center justify-center gap-10 mb-10">
        <div className="bg-primaryLight p-10 rounded-xl">
          <Image
            src={singleProduct?.image}
            alt="product image"
            height
            width={600}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-3">
          <h2 className="text-3xl lg:text-5xl font-bold">
            {singleProduct?.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="font-bold">Category:</span>
            <span>{singleProduct?.category}</span>
          </div>
          <div className="flex items-center gap-4 font-bold">
            <Rate disabled value={singleProduct?.review} allowHalf />(
            {singleProduct?.review})
          </div>
          <div className="flex items-center gap-4">
            <p className="text-primary text-4xl font-bold">
              ${singleProduct?.price}
            </p>
            {singleProduct?.discountedPrice && (
              <p className="text-base font-bold line-through text-textColor">
                ${singleProduct?.price}
              </p>
            )}
          </div>
          <p className="font-semibold text-textColor">
            {singleProduct?.description}
          </p>
          <ProductCountCart single={true} item={singleProduct} />
        </div>
      </div>
      <ProductCard title={"Related products"} data={productData?.best} />
      <ProductCard title={"You may also like"} data={productData?.popular} />
      <NewsletterBanner />
      <SmallFeature />
    </section>
  );
};

export default page;
