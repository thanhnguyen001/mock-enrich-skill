import UserPage from "pages/Main/User/UserPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import AdminPage from "pages/Admin/AdminPage";
import LoginPage from "pages/Login/LoginPage";
import MainPage from "pages/Main/MainPage";
import HomePage from "pages/Main/Home/HomePage";
import { store } from "reducers/store";
import DetailNews from "pages/Main/DetailNews/DetailNews";
import UserManagement from "pages/Admin/components/UserManagement/UserManagement";
import PostManagement from "pages/Admin/components/PostManagement/PostManagement";
import Dashboard from "pages/Admin/components/Dashboard/Dashboard";

const routes = [
  {
    path: "/log/*",
    element: LoginPage,
    canActive: store.getState().token ? "/" : "",
  },
  {
    path: "/admin/*",
    element: AdminPage,
  },
  {
    path: "/*",
    element: MainPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];

export default routes;

export const customerRoutes = [
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/news/:newsId",
    element: DetailNews,
  },
  {
    path: "/categories/:category",
    element: HomePage,
  },
  {
    path: "/:userId",
    element: UserPage,
  },
];

export const adminRoutes = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
  {
    path: "/user-management",
    element: UserManagement,
  },
  {
    path: "/post-management",
    element: PostManagement,
  },
];
