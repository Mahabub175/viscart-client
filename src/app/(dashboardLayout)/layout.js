import { Layout } from "antd";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import { Content } from "antd/es/layout/layout";

const DashboardLayout = ({ children }) => {
  return (
    <Layout className="mb-20">
      <Layout className="relative">
        <Sidebar />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            backgroundColor: "white",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
