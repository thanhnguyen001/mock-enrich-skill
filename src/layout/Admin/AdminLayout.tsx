import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import './AdminLayout.scss';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="ad-layout flex">
      <div className="ad-left-bar">
        <LeftBar />
      </div>
      <div className="">
        <Header />
        <main className="ad-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
