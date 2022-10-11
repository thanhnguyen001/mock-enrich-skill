import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer";
import dialogReducer from "./dialogReducer";
import layoutReducer from "./layoutReducer";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    token: loginReducer,
    user: userReducer,
    dialog: dialogReducer,
    theme: themeReducer,
    news: newsReducer,
    layout: layoutReducer,
    category: categoryReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
