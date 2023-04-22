/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuid } from "uuid";
import { hideModal } from "../../store/reducers/uiSlice";
import { itemSchema } from "../../utils/validator";
import { addOne } from "../../store/reducers/dataSlice";
import Item from "../../model/Item";

export default function Modal() {
  const modalDisplay = useSelector((state) => state.ui.modalDisplay);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(itemSchema),
  });
  function hideModalHandler() {
    dispatch(hideModal());
  }
  function onSubmit(data) {
    const uniqueId = uuid();
    const item = new Item({ id: uniqueId, ...data });
    dispatch(addOne({ ...item }));
    dispatch(hideModal());
    reset();
  }
  return (
    <div
      className="modal"
      onClick={() => hideModalHandler()}
      style={{ display: modalDisplay }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__title">Создание новой записи</div>
          <div className="modal__close" onClick={() => hideModalHandler()}>
            X
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Имя" type="text" {...register("name")} />
          {errors?.name && (
            <span className="auth__error">{errors.name.message}</span>
          )}
          <input
            placeholder="Год"
            type="number"
            min="1900"
            max="2099"
            step="1"
            {...register("year")}
          />
          {errors?.year && (
            <span className="auth__error">{errors.year.message}</span>
          )}
          <input placeholder="Цвет" type="text" {...register("color")} />
          {errors?.color && (
            <span className="auth__error">{errors.color.message}</span>
          )}
          <input
            placeholder="Значение"
            type="text"
            {...register("pantone_value")}
          />
          {errors?.pantone_value && (
            <span className="auth__error">{errors.pantone_value}</span>
          )}
          <button className="modal__createBtn" type="submit">
            Создать запись
          </button>
        </form>
      </div>
    </div>
  );
}
