import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import "./MainLayout.scss";
import { useAppSelector } from "hooks/hook";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className="bg-bg-primary min-h-[100vh]" data-theme={theme}>
      <Header />
      <main className="flex sm:container sm:mx-auto">
        <LeftBar />
        <div className="flex-1 content">
          {props.children}
        </div>
        <RightBar />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
