import MainLayout from "layout/Main/MainLayout";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { customerRoutes } from "routes/routes";
import HomePage from "./Home/HomePage";

const MainPage: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {customerRoutes.map((item, index) => {
          const Page = item.element;
          return <Route key={index} path={item.path} element={<Page />} />;
        })}
      </Routes>
    </MainLayout>
  );
};

export default MainPage;
