import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./navbar.scss";
import { logoutUser } from "../../store/reducers/userSlice";
import { showModal } from "../../store/reducers/uiSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  function logoutHandler(e) {
    e.preventDefault();
    dispatch(logoutUser());
  }
  function createItem() {
    dispatch(showModal());
  }
  return (
    <div className="navbar">
      {isAuth && (
        <div>
          <button type="button" onClick={(e) => createItem(e)}>
            Создать
          </button>
          <button type="button" onClick={(e) => logoutHandler(e)}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
