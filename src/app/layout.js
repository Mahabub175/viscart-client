import { Roboto } from "next/font/google";
import "./globals.css";
import LandingHeader from "@/components/Shared/Navbar/LandingHeader";
import LandingFooter from "@/components/Shared/Footer/LandingFooter";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Viscart - A Complete E-Commerce",
  description: "Complete E-Commerce Site",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <AntdRegistry>
          <Toaster
            richColors
            closeButton
            position="top-center"
            duration={2000}
          />
          <LandingHeader />
          <div className="min-h-[calc(100vh-573px)] container mx-auto px-5 lg:pt-20">
            {children}
            <hr />
          </div>
          <LandingFooter />
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
