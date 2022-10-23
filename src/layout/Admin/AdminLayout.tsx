import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import './AdminLayout.scss';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

  const showLeftBar = () => {
    const leftBar = document.querySelector('.adm-left-bar') as HTMLDivElement;
    leftBar.classList.toggle('active-mobile');
  }

  return (
    <div className="adm-layout flex">
      <div className="adm-left-bar" onClick={showLeftBar}>
        <LeftBar />
        <div className="close-left-bar">X</div>
      </div>
      <div className="flex-1 adm-body">
        <Header />
        <div className="adm-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
