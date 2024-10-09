import { Popover, Menu } from "antd";
import { MdOutlineDashboard } from "react-icons/md";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { categoryOptions } from "@/assets/data/optionData";

const CategoryNavigation = () => {
  const generateMenuItems = (items) => {
    return items.map((item, index) => {
      if (item.children) {
        const nestedContent = (
          <Menu style={{ border: "0px", fontWeight: "bold" }}>
            {item?.children?.map((child, childIndex) => (
              <Menu.Item
                key={`${item.name}-${child.name}-${childIndex}`}
                style={{ border: "0px" }}
              >
                <Link href={child.to}>{child.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        );

        return (
          <Menu.Item
            key={`${item.name}-${index}`}
            style={{ border: "0px", fontWeight: "bold" }}
          >
            <Popover content={nestedContent} trigger="hover" placement="right">
              <span className="flex items-center justify-between">
                <Link href={item.to || "#"}>{item.label}</Link>
                <RightOutlined />
              </span>
            </Popover>
          </Menu.Item>
        );
      }

      return (
        <Menu.Item
          key={`${item.name}-${index}`}
          style={{ border: "0px", fontWeight: "bold" }}
        >
          <Link href={item.to || "#"}>{item.label}</Link>
        </Menu.Item>
      );
    });
  };

  const mainContent = (
    <Menu key="main-menu" style={{ border: "0px", fontWeight: "bold" }}>
      {generateMenuItems(categoryOptions)}
    </Menu>
  );

  return (
    <div>
      <Popover content={mainContent} trigger="hover">
        <button className="flex items-center gap-2 bg-primary px-6 py-4 lg:py-0 mb-4 lg:mb-0 rounded-xl text-white font-bold h-12">
          <MdOutlineDashboard />
          <span>Categories</span>
        </button>
      </Popover>
    </div>
  );
};

export default CategoryNavigation;
