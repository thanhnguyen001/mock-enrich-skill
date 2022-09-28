import LoginPage from "pages/Login/LoginPage";
import HomePage from "pages/Home/HomePage";
import LoginLayout from "layout/Login/LoginLayout";
import MainLayout from "layout/Main/MainLayout";
import UserPage from "pages/User/UserPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import { Fragment } from "react";

const routes = [
  {
    path: "/log/*",
    element: LoginPage,
    layout: LoginLayout,
  },
  {
    path: "/:userId",
    element: UserPage,
    layout: MainLayout,
  },
  {
    path: "/",
    element: HomePage,
    layout: MainLayout,
  },
  {
    path: "*",
    element: NotFoundPage,
    layout: Fragment,
  },
];

export default routes;
