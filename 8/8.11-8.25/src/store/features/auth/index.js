import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const loginSlice = createSlice({
  name: 'isAuthenticated',
  initialState,
  reducers: {
    login: (state) => state.isAuthenticated = true,
    logout: (state) => state.isAuthenticated = false,
  },
});

export const { login, logout } = loginSlice.actions;
export const selectCount = (state) => state.isAuthenticated;

export default loginSlice.reducer;
