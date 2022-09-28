import { Modal } from "antd";
import Dialog from "components/Dialog/Dialog";
import { useAppSelector } from "hooks/hook";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes/routes";
import "./App.css";
import "./assets/scss/GlobalStyle.scss";

function App() {
  const is_login = useAppSelector((state) => state.is_login);
  
  return (
    <div className="App">
      <Routes>
        {routes.map((item, index) => {
          const Page = item.element;
          const Layout = item.layout;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
      <Dialog />
    </div>
  );
}

export default App;
