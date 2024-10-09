import { productData } from "@/assets/data/productData";
import NewsletterBanner from "@/components/LandingPages/Home/NewsletterBanner";
import ProductCard from "@/components/LandingPages/Home/Products/ProductCard";
import SmallFeature from "@/components/LandingPages/Home/SmallFeature";
import CartDetails from "@/components/LandingPages/MyCart/CartDetails";

const MyCart = () => {
  return (
    <>
      <CartDetails />
      <ProductCard title={"Related products"} data={productData?.best} />
      <ProductCard title={"You may also like"} data={productData?.popular} />
      <NewsletterBanner />
      <SmallFeature />
    </>
  );
};

export default MyCart;
