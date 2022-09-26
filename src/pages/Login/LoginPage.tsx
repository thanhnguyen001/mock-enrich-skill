import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Routes, Route } from "react-router-dom";
import Register from "./components/RegisterForm/Register";
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div id="login-page" className="h-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default LoginPage;
