import React from "react";
import "../table.scss";
import { useSelector } from "react-redux";
import TableItem from "../tableItem/TableItem";
import Loader from "../../loader/Loader";
import { selectors } from "../../../store/reducers/dataSlice";

export default function TableList() {
  let count = 0;
  const isLoader = useSelector((state) => state.data.isLoader);
  const data = useSelector(selectors.selectAll);

  return (
    <div>
      {isLoader ? (
        <Loader />
      ) : (
        data.map((el) => {
          count += 1;
          return <TableItem key={el.id} data={el} count={count} />;
        })
      )}
    </div>
  );
}
