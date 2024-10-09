import { productData } from "@/assets/data/productData";
import NewsletterBanner from "@/components/LandingPages/Home/NewsletterBanner";
import ProductCard from "@/components/LandingPages/Home/Products/ProductCard";
import SmallFeature from "@/components/LandingPages/Home/SmallFeature";
import WishlistDetails from "@/components/LandingPages/Wishlist/WishlistDetails";

const Wishlist = () => {
  return (
    <>
      <WishlistDetails />
      <ProductCard title={"Related products"} data={productData?.best} />
      <ProductCard title={"You may also like"} data={productData?.popular} />
      <NewsletterBanner />
      <SmallFeature />
    </>
  );
};

export default Wishlist;
