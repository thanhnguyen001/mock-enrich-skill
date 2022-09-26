import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loginSlice = createSlice({
    name: 'is_login',
    initialState,
    reducers: {
        login: (state) => {
            return state = true;
        },
        logout: (state) => {
            return state = false;
        }
    }
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;