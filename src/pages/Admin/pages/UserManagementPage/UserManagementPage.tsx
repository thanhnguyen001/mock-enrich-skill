import React from "react";
import { Route, Routes } from "react-router-dom";
import { userManagementRoutes } from "routes/routes";

const UserManagementPage: React.FC = () => {
  return (
    <div className="user-management-page">
      <Routes>
        {userManagementRoutes.map((item, index) => {
          const Page = item.element;
          return <Route key={index} path={item.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
};

export default UserManagementPage;
