import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../Api/authApi";
import authSlice from "../Slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
