import { createSlice } from "@reduxjs/toolkit";
import { ILayout } from "models";

export const initialLayout: ILayout = {
  leftBar: "normal",
  rightBar: "normal",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialLayout,
  reducers: {
    setLayout: (state, action) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      return (state = newState);
    },
  },
});

export const { setLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
