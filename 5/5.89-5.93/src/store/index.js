import { configureStore } from '@reduxjs/toolkit';
import inputTextReducer from './inputText/inputTextSlice';

export const store = configureStore({
  reducer: {
    inputText: inputTextReducer,
  },
});
