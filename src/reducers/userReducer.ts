import { IUser } from "./../models/index";
import { storageKey } from "./../constants/storageKey";
import { createSlice } from "@reduxjs/toolkit";

const isHasKey = localStorage.getItem(storageKey.user);
const initialState: IUser = isHasKey ? JSON.parse(isHasKey) : false;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      localStorage.setItem(storageKey.user, JSON.stringify(action.payload));
      return (state = action.payload);
    },
  },
});

export const { storeUserInfo } = userSlice.actions;

export default userSlice.reducer;
