import { postApi } from "api/postApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pathApi from "api/apiPath";

const initialState: any = {};

export const getNews = createAsyncThunk(pathApi.post.post, async (id: string, thunkAPI) => {
  const res = await postApi.getPost(id);
  return res.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default newsSlice.reducer;
