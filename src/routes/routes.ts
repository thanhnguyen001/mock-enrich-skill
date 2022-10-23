import UserPage from "pages/Main/User/UserPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import AdminPage from "pages/Admin/AdminPage";
import LoginPage from "pages/Login/LoginPage";
import MainPage from "pages/Main/MainPage";
import HomePage from "pages/Main/Home/HomePage";
import { store } from "reducers/store";
import DetailNews from "pages/Main/DetailNews/DetailNews";
import UserManagement from "pages/Admin/pages/UserManagementPage/components/UserManagement/UserManagement";
import PostManagement from "pages/Admin/pages/PostManagementPage/components/PostManagement/PostManagement";
import Dashboard from "pages/Admin/components/Dashboard/Dashboard";
import { lazy } from "react";
import UserForm from "pages/Admin/pages/UserManagementPage/components/UserForm/UserForm";
import PostForm from "pages/Admin/pages/PostManagementPage/components/PostForm/PostForm";

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
    element: lazy(() => import('pages/Admin/components/Dashboard/Dashboard')),
  },
  {
    path: "/user-management/*",
    element: lazy(() => import('pages/Admin/pages/UserManagementPage/UserManagementPage')),
  },
  {
    path: "/post-management/*",
    element: lazy(() => import('pages/Admin/pages/PostManagementPage/PostManagementPage')),
  },
];

export const userManagementRoutes = [
  {
    path: '/add',
    element: UserForm
  },
  {
    path: '/edit/:userId',
    element: UserForm
  },
  {
    path: '/detail/:userId',
    element: UserForm
  },
  {
    path: '/',
    element: UserManagement
  },
]

export const postManagementRoutes = [
  {
    path: '/add',
    element: PostForm
  },
  {
    path: '/edit/:postId',
    element: PostForm
  },
  {
    path: '/detail/:postId',
    element: PostForm
  },
  {
    path: '/',
    element: PostManagement
  },
]

