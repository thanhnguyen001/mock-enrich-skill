import React from "react";
import LoginPage from "../../pages/Login/LoginPage";
import imgs from "../../assets/imgs";

const LoginLayout: React.FC = (props) => {
  return (
    <div className="login w-full h-[100vh]  relative">
      <div className="absolute inset-0 z-[-1]">
        <img className="w-full h-full" src={imgs.bgLogin} alt="gb-login" />
      </div>
      <LoginPage />
    </div>
  );
};

LoginLayout.propTypes = {};

export default LoginLayout;
