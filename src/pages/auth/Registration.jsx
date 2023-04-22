import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginLogo from "../../assets/img/login.svg";
import { formRegistrationSchema } from "../../utils/validator";
import { registrationUser } from "../../store/reducers/userSlice";
/* eslint-disable react/jsx-props-no-spreading */
export default function Registration() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formRegistrationSchema),
  });
  const onSubmit = ({ password }) =>
    dispatch(registrationUser({ email: "michael.lawson@reqres.in", password }));
  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <img src={LoginLogo} alt="authlogo" />
        <h1 className="auth__title">Регистрация</h1>
        <input
          value="michael.lawson@reqres.in"
          disabled
          autoComplete="off"
          placeholder="Email"
          type="email"
          {...register("email")}
        />
        {errors?.email && (
          <span className="auth__error">{errors.email.message}</span>
        )}
        <input placeholder="Пароль" type="password" {...register("password")} />
        {errors?.password && (
          <span className="auth__error">{errors.password.message}</span>
        )}
        <input
          placeholder="Подтвердите пароль"
          type="password"
          {...register("cpassword")}
        />
        {errors?.cpassword && (
          <span className="auth__error">{errors.cpassword.message}</span>
        )}
        <button type="submit">Зарегистрироваться</button>
        <div className="auth__registration">
          <span>Уже есть аккаунт? </span>
          <Link to="/auth" className="auth__link">
            Авторизоваться
          </Link>
        </div>
      </form>
    </div>
  );
}
