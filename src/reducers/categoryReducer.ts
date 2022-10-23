import { storageKey } from "./../constants/storageKey";
import { createSlice } from "@reduxjs/toolkit";
import { INewsCategory } from "models";

const isHasKey = localStorage.getItem(storageKey.category);
const initialState: {
  currentCategory: INewsCategory | null;
  list: INewsCategory[];
} = isHasKey ? JSON.parse(isHasKey) : {};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const newState = {...state, list: action.payload}
      localStorage.setItem(storageKey.category, JSON.stringify(newState));
      return state = newState;
    },
    setCurrentCategory: (state, action) => {
      const newState = {...state, currentCategory: action.payload}
      localStorage.setItem(storageKey.category, JSON.stringify(newState));
      return state = newState;
    },
  },
});

export const { setCategories, setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
