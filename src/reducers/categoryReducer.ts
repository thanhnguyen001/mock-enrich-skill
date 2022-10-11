import { storageKey } from "./../constants/storageKey";
import { createSlice } from "@reduxjs/toolkit";
import { INewsCategory } from "models";

const isHasKey = localStorage.getItem(storageKey.category);
const initialState: INewsCategory[] = isHasKey ? JSON.parse(isHasKey) : [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      localStorage.setItem(storageKey.category, JSON.stringify(action.payload));
      return (state = action.payload);
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
