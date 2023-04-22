import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalDisplay: "none",
  popupChangeDisplay: "none",
};
/* eslint-disable no-param-reassign */
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal: (state) => {
      state.modalDisplay = "flex";
    },
    hideModal: (state) => {
      state.modalDisplay = "none";
    },
    showChangePopup: (state) => {
      state.popupChangeDisplay = "flex";
    },
    hideChangePopup: (state) => {
      state.popupChangeDisplay = "none";
    },
  },
});

export const { showModal, hideModal, showChangePopup, hideChangePopup } =
  uiSlice.actions;
export default uiSlice.reducer;
