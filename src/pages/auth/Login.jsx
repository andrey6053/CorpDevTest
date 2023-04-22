import React from "react";
import { useForm } from "react-hook-form";
import "./auth.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginLogo from "../../assets/img/login.svg";
import { userLogin } from "../../store/reducers/userSlice";
import { loginSchema } from "../../utils/validator";

/* eslint-disable react/jsx-props-no-spreading */
export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => dispatch(userLogin(data));
  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <img src={LoginLogo} alt="authlogo" />
        <h1 className="auth__title">Войти</h1>
        <input
          autoComplete="off"
          placeholder="Введите логин"
          type="text"
          {...register("email")}
        />
        {errors?.email && (
          <span className="auth__error">{errors.email.message}</span>
        )}
        <input
          placeholder="Введите пароль"
          type="password"
          {...register("password")}
        />
        {errors?.password && (
          <span className="auth__error">{errors.password.message}</span>
        )}
        <button type="submit">Авторизоваться</button>
        <div className="auth__registration">
          <span>Нет аккаунта? </span>
          <Link to="/registration" className="auth__link">
            Создать аккаунт
          </Link>
        </div>
      </form>
    </div>
  );
}
