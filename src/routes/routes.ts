import UserPage from "pages/Main/User/UserPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import AdminPage from "pages/Admin/AdminPage";
import LoginPage from "pages/Login/LoginPage";
import MainPage from "pages/Main/MainPage";
import HomePage from "pages/Main/Home/HomePage";
import { store } from "reducers/store";
import DetailNews from "pages/Main/DetailNews/DetailNews";

const routes = [
  {
    path: "/log/*",
    element: LoginPage,
    canActive: store.getState().token ? '/' : '',
  },
  {
    path: "/admin",
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
    path: "/:userId",
    element: UserPage,
  },
];
