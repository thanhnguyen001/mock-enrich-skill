import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./dialogReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    is_login: loginReducer,
    user: userReducer,
    dialog: dialogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
