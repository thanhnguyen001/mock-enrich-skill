import { IUser } from "./../models/index";
import { storageKey } from "./../constants/storageKey";
import { createSlice } from "@reduxjs/toolkit";

const isHasKey = localStorage.getItem(storageKey.user);
const initialState: IUser | null = isHasKey ? JSON.parse(isHasKey) : null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      localStorage.setItem(storageKey.user, JSON.stringify(action.payload));
      return (state = action.payload);
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
