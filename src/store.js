import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./components/slice";

export const store = configureStore({
  reducer: {
    productSlice: dataReducer,
  },
});
