import React from "react";
import imgs from "../../assets/imgs";

type LoginLayoutProps = {
  children: React.ReactNode;
};

const LoginLayout = (props: LoginLayoutProps) => {
  return (
    <div className="login w-full h-[100vh]  relative">
      <div className="absolute inset-0 z-[-1]">
        <img className="w-full h-full" src={imgs.bgLogin} alt="gb-login" />
      </div>
      {props.children}
    </div>
  );
};

LoginLayout.propTypes = {};

export default LoginLayout;
