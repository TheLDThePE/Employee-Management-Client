import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice.jsx";

const store = configureStore({
    reducer: {
      auth:authReducer
  }
});

export default store;