import { INews, IUser } from "models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  user: IUser | null;
  post: INews | null;
  userCategory: any[];
  postCategory: any[];
} = {
  user: null,
  post: null,
  userCategory: [],
  postCategory: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const newState = { ...state, user: action.payload };
      return (state = newState);
    },
    storePost: (state, action) => {
      const newState = { ...state, post: action.payload };
      return (state = newState);
    },
    storeUserCategories: (state, action) => {
      const newState = { ...state, userCategory: action.payload };
      return (state = newState);
    },
    storePostCategories: (state, action) => {
      const newState = { ...state, postCategory: action.payload };
      return (state = newState);
    },
  },
});

export const { storeUser, storePost, storeUserCategories, storePostCategories } = adminSlice.actions;

export default adminSlice.reducer;
