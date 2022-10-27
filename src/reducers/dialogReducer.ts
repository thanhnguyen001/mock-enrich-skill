import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  type: "error" | "notify";
  msg: string;
  isShow: boolean;
  title: string;
  redirect?: string;
  useDialog: boolean;
} = {
  type: "notify",
  msg: "",
  isShow: false,
  title: "",
  redirect: '/',
  useDialog: true
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    show: (state: any, action: { payload: any; }) => {
      if (!action.payload.useDialog) {
        action.payload.useDialog = true;
      }
      return (state = action.payload);
    },
  },
});

export const { show } = dialogSlice.actions;

export default dialogSlice.reducer;
