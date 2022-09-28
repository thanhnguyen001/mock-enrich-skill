import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/RegisterForm/Register";
import "./LoginPage.scss";
import { useAppSelector } from "hooks/hook";
import { routePath } from "routes/routePath";

const LoginPage: React.FC = () => {
  const is_login = useAppSelector((state) => state.is_login);
  const navigate = useNavigate();

  useEffect(() => {
    if (is_login) {
      navigate(routePath.home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [is_login]);

  return (
    <div id="login-page" className="h-full flex justify-center items-center">
      <Routes>
        <Route path="" element={<LoginForm />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default LoginPage;
