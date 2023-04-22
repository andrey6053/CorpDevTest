/* eslint-disable no-use-before-define */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchListMany } from "../../api/data";

export const fetchData = createAsyncThunk("data/fetch", fetchListMany);

const dataAdapter = createEntityAdapter();
const initialState = dataAdapter.getInitialState({
  currentPage: null,
  isLoader: false,
});
/* eslint-disable no-param-reassign */
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const currentList = Object.values(state.entities);
      const newList = [action.payload, ...currentList];
      dataAdapter.setAll(state, newList);
      toast.success(`Данные обновлены`);
    },
    updateItem: (state, action) => {
      dataAdapter.updateOne(state, action.payload);
      toast.success(`Данные сохранены. ID:${action.payload.id}`);
    },
    removeOne: (state, action) => {
      dataAdapter.removeOne(state, action.payload);
      toast.success(`Данные удалены`);
    },
    pageChanger: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const { page, data } = action.payload;
      dataAdapter.setAll(state, data);
      state.currentPage = page;
      state.isLoader = false;
      toast.success(`Данные успешно получены`);
    });
    builder.addCase(fetchData.rejected, (state) => {
      toast.error("Ошибка при загрузке данных");
      state.isLoader = false;
      fetchData();
    });
  },
});

export const selectors = dataAdapter.getSelectors((state) => state.data);
export const { addMany, addOne, updateItem, removeOne, pageChanger } =
  dataSlice.actions;
export default dataSlice.reducer;
