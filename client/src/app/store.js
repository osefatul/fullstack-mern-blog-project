import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
