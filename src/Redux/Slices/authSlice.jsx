import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
  toggleForTheme: true,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getToken: (state, { payload }) => {
      state.token = payload;

      Cookies.set("token", payload);
    },
    setToggle: (state) => {
      state.toggleForTheme = !state.toggleForTheme;
    },
  },
});

export const { getToken, setToggle } = authSlice.actions;
export default authSlice.reducer;
