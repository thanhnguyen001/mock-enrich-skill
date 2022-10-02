import { userApi } from "api/userApi";
import Dialog from "components/Dialog/Dialog";
import { useAppDispatch, useAppSelector } from "hooks/hook";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { setUserInfo } from "reducers/userReducer";
import routes from "routes/routes";
import "./App.css";
import "./assets/scss/GlobalStyle.scss";

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && user.nhan_vien_id) {
      
      userApi.getUser(user.nhan_vien_id).then((res) => {
        dispatch(setUserInfo(res.data));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/log/*' element={token ? <Navigate to={'/'} replace /> : <LoginPage />}/>
        <Route path='/admin/*' element={<AdminPage />}/>
        <Route path='/*' element={<MainPage />}/>
        <Route path='*' element={<NotFoundPage />}/> */}

        {routes.map((item, index) => {
          const Page = item.element;
          return (
            <Route key={index} path={item.path} element={item.canActive ? <Navigate to={item.canActive} replace /> : <Page />} />
          );
        })}
      </Routes>
      <Dialog />
    </div>
  );
}

export default App;
