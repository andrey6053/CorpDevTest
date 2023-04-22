/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, logout, register } from "../../api/user";

export const userLogin = createAsyncThunk("user/login", login);
export const registrationUser = createAsyncThunk("user/registration", register);
export const logoutUser = createAsyncThunk("user/logout", logout);
const initialState = {
  user: {},
  isAuth: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        const { token, id } = action.payload;
        state.user = action.payload;
        state.isAuth = true;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
      })
      .addCase(userLogin.rejected, (state, action) => {
        toast.error(action.payload.error);
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        const { token, id } = action.payload;
        state.user = action.payload;
        state.isAuth = true;
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
      })
      .addCase(registrationUser.rejected, (state, action) => {
        toast.error(action.payload.error);
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {};
        localStorage.removeItem("token");
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
