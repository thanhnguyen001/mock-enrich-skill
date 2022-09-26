import React from "react";
import "./App.css";
import "./assets/scss/GlobalStyle.scss";
import { useAppSelector } from "./hooks/hook";
import LoginLayout from "./layout/Login/LoginLayout";
import MainLayout from "./layout/Main/MainLayout";

function App() {
  const is_login = useAppSelector((state) => state.is_login);

  return (
    <div className="App">
      {is_login && <MainLayout />}
      {!is_login && <LoginLayout />}
    </div>
  );
}

export default App;
