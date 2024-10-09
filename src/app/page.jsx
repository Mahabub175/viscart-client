import { productData } from "@/assets/data/productData";
import Banner from "@/components/LandingPages/Home/Banner";
import Categories from "@/components/LandingPages/Home/Categories";
import NewsletterBanner from "@/components/LandingPages/Home/NewsletterBanner";
import FeatureProduct from "@/components/LandingPages/Home/Products/FeatureProduct";
import ProductCard from "@/components/LandingPages/Home/Products/ProductCard";
import SmallFeature from "@/components/LandingPages/Home/SmallFeature";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Categories />
      <ProductCard title={"Popular Products"} data={productData?.popular} />
      <ProductCard title={"Best Offer"} data={productData?.best} />
      <FeatureProduct />
      <NewsletterBanner />
      <SmallFeature />
    </div>
  );
};

export default Home;
