/* eslint-disable camelcase */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteLoge from "../../../assets/img/delete.svg";
import ChangeLoge from "../../../assets/img/change.svg";
import Popup from "./Popup";
import { removeOne } from "../../../store/reducers/dataSlice";

export default function TableItem({ data, count }) {
  const dispatch = useDispatch();
  const [styleFlex, setStyleFlex] = useState("none");
  const { name, year, color, pantone_value, id } = data;
  function deleteHandler(e) {
    e.preventDefault();
    dispatch(removeOne(id));
  }
  function changeHandler(e) {
    e.preventDefault();
    setStyleFlex("flex");
  }
  return (
    <div className="item">
      <div className="item__number item__row">{count}</div>
      <div className="item__name item__row">{name}</div>
      <div className="item__name item__row">{year}</div>
      <div className="item__name item__row">{color}</div>
      <div className="item__name item__row">{pantone_value}</div>
      <button
        type="button"
        className="item__btnChange item__btn"
        onClick={(e) => changeHandler(e)}
      >
        <img src={ChangeLoge} alt="change" />
      </button>
      <button
        type="button"
        className="item__btnDelete item__btn"
        onClick={(e) => deleteHandler(e)}
      >
        <img src={DeleteLoge} alt="delete" />
      </button>
      <Popup display={styleFlex} data={data} setStyle={setStyleFlex} />
    </div>
  );
}
