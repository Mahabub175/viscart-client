import { Popover, List } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import userPhoto from "@/assets/images/about.png";
import { profilePopoverData } from "@/assets/data/profilePopoverData";
import { toast } from "sonner";
import Link from "next/link";
import scrollToTop from "@/lib/utils/scrollToTop";

const ProfileHover = () => {
  const pathname = usePathname();
  const role = "user";

  const handleLogOut = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    scrollToTop();
  };

  const popoverContent = (
    <List
      dataSource={profilePopoverData}
      style={{ display: "flex", flexDirection: "column", border: "0px" }}
      renderItem={(item) => (
        <List.Item
          onClick={scrollToTop()}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "start",
            gap: "8px",
          }}
        >
          {item?.name === "Log Out" ? (
            <div className="flex items-center gap-2" onClick={handleLogOut}>
              <item.icon className="text-xl text-danger" />
              <span className="font-bold text-danger"> {item.name}</span>
            </div>
          ) : (
            <Link
              onClick={scrollToTop()}
              href={`/dashboard/${role}/${item.path}`}
              className={`hover:text-primary font-bold text-base text-black flex items-center gap-2 ${
                pathname === `/dashboard/${role}/${item?.path}`
                  ? "text-primary"
                  : ""
              }`}
            >
              <item.icon className="text-xl" />
              <span className="font-bold"> {item.name}</span>
            </Link>
          )}
        </List.Item>
      )}
    />
  );

  return (
    <Popover content={popoverContent} title="Profile" trigger="hover">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src={userPhoto}
          width
          height
          alt="profile"
          className="rounded-full h-12 w-12"
        />
        <p className="font-bold">{"Mahabub"}</p>
        <IoIosArrowDown />
      </div>
    </Popover>
  );
};

export default ProfileHover;
