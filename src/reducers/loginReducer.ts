import { storageKey } from './../constants/storageKey';
import { createSlice } from "@reduxjs/toolkit";

const isHasKey = localStorage.getItem(storageKey.token);
const initialState = isHasKey ? JSON.parse(isHasKey) : false;

export const loginSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        login: (state, action) => {
            if (!action.payload) return state = '';
            localStorage.setItem(storageKey.token, JSON.stringify(action.payload));
            return state = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem(storageKey.token);
            return state = '';
        }
    }
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;