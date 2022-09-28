import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import "./MainLayout.scss";

type MainLayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  return (
    <div className="">
      <Header />
      <main className="flex sm:container sm:mx-auto">
        <LeftBar />
        <div id="content" className="flex-1 mt-16px">
          {props.children}
        </div>
        <RightBar />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
