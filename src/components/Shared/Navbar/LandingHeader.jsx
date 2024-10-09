"use client";

import React, { useEffect, useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import LandingTopHeader from "./LandingTopHeader";
import Link from "next/link";
import { userRoutes } from "@/routes/user.routes";
import navbarItemsGenerator from "@/lib/utils/navbarItemsGenerator";
import { usePathname } from "next/navigation";
import CategoryNavigation from "./CategoryNavigation";

const LandingHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto mb-10 bg-white">
      {isMobile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              style={{ margin: 16 }}
            />
            <Link href="/">
              <span className="text-2xl font-extrabold text-primary mt-1">
                Viscart
              </span>
            </Link>
          </div>
          <Link href="/sign-in">
            <span className="flex items-center gap-2 text-primary px-4">
              <Button
                style={{
                  padding: "0.5rem 2.5rem 2.0rem 2.5rem",
                  fontWeight: 700,
                }}
                type="primary"
              >
                Sign In
              </Button>
            </span>
          </Link>
          <Drawer
            title="Menu"
            placement="left"
            onClose={onClose}
            open={drawerVisible}
          >
            <LandingTopHeader />
            <CategoryNavigation />
            <Menu
              className="custom-menu"
              style={{ border: "0px" }}
              mode="vertical"
              selectedKeys={[pathname]}
              items={navbarItemsGenerator(userRoutes, pathname)}
            />
          </Drawer>
        </div>
      ) : (
        <Header
          style={{
            position: "sticky",
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: "0px 1.5rem 0px 1.5rem",
          }}
        >
          <LandingTopHeader />
          <div className="flex items-center gap-4">
            <CategoryNavigation />
            <Menu
              className="custom-menu"
              style={{ border: "0px" }}
              mode="horizontal"
              selectedKeys={[pathname]}
              items={navbarItemsGenerator(userRoutes, pathname)}
            />
          </div>
        </Header>
      )}
    </nav>
  );
};

export default LandingHeader;
