import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const authUser = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    saveUserCategories: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { saveUserCategories } = authUser.actions;

export default authUser.reducer;
