import AdminLayout from "layout/Admin/AdminLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "routes/routes";
import './AdminPage.scss';
import Dashboard from "./components/Dashboard/Dashboard";

const AdminPage: React.FC = () => {
  return (
    <div className="ad-page">
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {adminRoutes.map((item, index) => {
            const Page = item.element;
            return <Route key={index} path={item.path} element={<Page />} />;
          })}
        </Routes>
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
