import { userApi } from "api/userApi";
import LoadingAdmin from "components/LoadingAdmin/LoadingAdmin";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import AdminLayout from "layout/Admin/AdminLayout";
import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { saveUserCategories } from "reducers/authorUserReducer";
import { adminRoutes } from "routes/routes";
import "./AdminPage.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import UserManagementPage from "./pages/UserManagementPage/UserManagementPage";

const AdminPage: React.FC = () => {
  //Router
  const navigate = useNavigate();

  //Redux
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user || (user && `${user.nhom_nhan_vien_id}` !== "1")) {
      navigate("/");
    } else {
      userApi.getUserCategories().then((res) => {
        dispatch(saveUserCategories(res.data));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="adm-page">
      <AdminLayout>
        <Suspense fallback={<LoadingAdmin />}>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/user-management" replace />} />
            {adminRoutes.map((item, index) => {
              const Page = item.element;
              return <Route key={index} path={item.path} element={<Page />} />;
            })}
          </Routes>
        </Suspense>
      </AdminLayout>
    </div>
  );
};

export default AdminPage;
