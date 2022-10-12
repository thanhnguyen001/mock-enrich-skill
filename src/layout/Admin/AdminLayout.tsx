import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import './AdminLayout.scss';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="adm-layout flex">
      <div className="adm-left-bar">
        <LeftBar />
      </div>
      <div className="flex-1">
        <Header />
        <div className="adm-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
