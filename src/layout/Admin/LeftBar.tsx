import { HomeOutlined, UserSwitchOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar: React.FC = () => {
  const handleActiveRoute = (isActive: boolean, isHome = false) => {
    let active = isActive ? "active" : "";
    return active + " flex-1 flex items-center h-full px-8px text-tx-color left-menu-link";
  };

  return (
    <div className="h-full adm-left-bar-wrap relative">
      <div className="logo px-[4px] py-[4px] text-[20px] rounded sticky top-[0px]">
        <p className="font-bold m-0">NEWS</p>
      </div>
      <div className="left-menu mt-16px sticky top-[60px]">
        <ul className="flex flex-col">
          <li className="w-full flex items-center cursor-pointer h-40px text-[20px]" title="Trang chủ">
            <NavLink to="/admin/dashboard" className={({ isActive }) => handleActiveRoute(isActive)}>
              <HomeOutlined />
              <span className="ml-12px left-menu-text">Trang chủ</span>
            </NavLink>
          </li>
          <li className="w-full flex items-center cursor-pointer h-40px text-[20px]" title="Quản lý thành viên">
            <NavLink to="/admin/user-management" className={({ isActive }) => handleActiveRoute(isActive)}>
              <UserSwitchOutlined />
              <span className="ml-12px left-menu-text">Quản lý thành viên</span>
            </NavLink>
          </li>
          <li className="w-full flex items-center cursor-pointer h-40px text-[20px]" title="Quản lý bài viết">
            <NavLink to="/admin/post-management" className={({ isActive }) => handleActiveRoute(isActive)}>
              <i className="fa-regular fa-newspaper"></i>
              <span className="ml-12px left-menu-text">Quản lý bài viết</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
