import React from "react";
import "./table.scss";
import Modal from "../modal/Modal";
import TableList from "./tableList/TableList";

export default function Table() {
  return (
    <div className="table">
      <div className="table__header">
        <div className="table__item ">Номер</div>
        <div className="table__item ">Имя</div>
        <div className="table__item">Год</div>
        <div className="table__item ">Цвет</div>
        <div className="table__item ">Значение</div>
      </div>
      <TableList />
      <Modal />
    </div>
  );
}
