import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => state.isAuthenticated = true,
    logout: (state) => state.isAuthenticated = false,
  },
});

export const { login, logout } = loginSlice.actions;
export const selectCount = (state) => state.auth;

export default loginSlice.reducer;
