import { storageKey } from "./../constants/storageKey";
import { createSlice } from "@reduxjs/toolkit";

const isHasKey = localStorage.getItem(storageKey.theme);
const initialState: string = isHasKey ? JSON.parse(isHasKey) : 'light';

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      localStorage.setItem(storageKey.theme, JSON.stringify(action.payload));
      return (state = action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
