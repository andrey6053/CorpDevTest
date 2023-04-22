import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageChanger } from "../../store/reducers/dataSlice";
import "./pagination.scss";
import nextBtn from "../../assets/img/arrowNext.svg";
import prevBtn from "../../assets/img/arrowPrev.svg";

export default function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.data.currentPage);
  const pageHandler = (page) => {
    if (page >= 1) dispatch(pageChanger(page));
  };
  useEffect(() => {
    dispatch(pageChanger(1));
  }, []);
  return (
    <div className="page">
      <button
        className="page__prev"
        type="button"
        onClick={() => {
          pageHandler(currentPage - 1);
        }}
      >
        <img src={prevBtn} alt="" />
      </button>
      <div className="page__currentPage">{currentPage}</div>
      <button
        className="page__next"
        type="button"
        onClick={() => {
          pageHandler(currentPage + 1);
        }}
      >
        <img src={nextBtn} alt="" />
      </button>
    </div>
  );
}
