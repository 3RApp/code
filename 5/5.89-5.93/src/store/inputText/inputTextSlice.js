import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Измените текст';

export const inputTextSlice = createSlice({
  name: 'inputText',
  initialState,
  reducers: {
    change: (state, action) => state = action.payload,
  },
});

export const { change } = inputTextSlice.actions;

export const selectInputText = (state) => state.inputText;

export default inputTextSlice.reducer;
