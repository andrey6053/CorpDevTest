/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { itemSchema } from "../../../utils/validator";
import { updateItem } from "../../../store/reducers/dataSlice";

export default function Popup({ data, display, setStyle }) {
  const dispatch = useDispatch();
  const { id, name, year, color, pantone_value } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(itemSchema),
    defaultValues: {
      name,
      year,
      color,
      pantone_value,
    },
  });
  function hideModalHandler() {
    setStyle("none");
  }
  function createItemTable() {
    setStyle("flex");
  }
  function onSubmit(values) {
    const changes = { id, ...values };
    dispatch(updateItem({ id, changes }));
    setStyle("none");
  }
  return (
    <div
      className="modal"
      onClick={() => hideModalHandler()}
      style={{ display }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__title">Редактирование</div>
          <div className="modal__close" onClick={() => hideModalHandler()}>
            X
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Имя"
            type="text"
            {...register("name", { value: "name" })}
          />
          {errors?.name && (
            <span className="auth__error">{errors.name.message}</span>
          )}
          <input
            placeholder="Год"
            type="number"
            min="1900"
            max="2099"
            step="1"
            {...register("year", { value: "year" })}
          />
          {errors?.year && (
            <span className="auth__error">{errors.year.message}</span>
          )}
          <input
            placeholder="Цвет"
            type="text"
            {...register("color", { value: "color" })}
          />
          {errors?.color && (
            <span className="auth__error">{errors.color.message}</span>
          )}
          <input
            placeholder="Значение"
            type="text"
            {...register("pantone_value", { value: "pantone_value" })}
          />
          {errors?.pantone_value && (
            <span className="auth__error">{errors.pantone_value.message}</span>
          )}
          <button
            className="modal__createBtn"
            type="submit"
            onClick={() => createItemTable()}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
