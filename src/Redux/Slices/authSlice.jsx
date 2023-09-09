import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getToken: (state, { payload }) => {
      state.token = payload;

      Cookies.set("token", payload);
    },
  },
});

export const { getToken } = authSlice.actions;
export default authSlice.reducer;
