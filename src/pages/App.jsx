import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/navbar/Navbar";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import MainPage from "./main/MainPage";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../store/reducers/userSlice";
import { fetchData } from "../store/reducers/dataSlice";

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.data.currentPage);
  const isAuth = useSelector((state) => state.user.isAuth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    if (token && id) {
      dispatch(setUser({ id, token }));
      dispatch(fetchData(currentPage));
    }
  }, [currentPage, isAuth]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ToastContainer />
        {!isAuth ? (
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
