import React from "react";
import "./table.scss";
import Modal from "../modal/Modal";
import TableList from "./tableList/TableList";

export default function Table() {
  return (
    <div className="table">
      <div className="table__header">
        <div className="table__name">Номер</div>
        <div className="table__name">Имя</div>
        <div className="table__year">Год</div>
        <div className="table__color">Цвет</div>
        <div className="table__value">Значение</div>
      </div>
      <TableList />
      <Modal />
    </div>
  );
}
