import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  type: "error" | "notify";
  msg: string;
  isShow: boolean;
  title: string;
} = {
  type: "notify",
  msg: "",
  isShow: false,
  title: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    show: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { show } = dialogSlice.actions;

export default dialogSlice.reducer;
