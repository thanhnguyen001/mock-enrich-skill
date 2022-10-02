import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/RegisterForm/Register";
import "./LoginPage.scss";
import { useAppSelector } from "hooks/hook";
import { routePath } from "routes/routePath";
import LoginLayout from "layout/Login/LoginLayout";

const LoginPage: React.FC = () => {
  const token = useAppSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(routePath.home.path);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div id="login-page" className="h-full flex justify-center items-center">
      <LoginLayout>
        <Routes>
          <Route path="" element={<LoginForm />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </LoginLayout>
    </div>
  );
};

export default LoginPage;
