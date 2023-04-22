import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/uiSlice";
import userReducer from "./reducers/userSlice";
import dataReducer from "./reducers/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
    ui: uiReducer,
  },
});
