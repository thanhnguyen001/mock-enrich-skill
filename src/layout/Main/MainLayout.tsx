import React from "react";
import HomePge from "../../pages/Home/HomePage";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: React.FC = (props) => {
  return (
    <div>
      <Header />
      <main>
        Content here
        <HomePge />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
