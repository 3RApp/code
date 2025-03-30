import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import shedulePageReducer from './shedulePageSlice';

export const store = configureStore({
  reducer: {
    isAuthenticated: authReducer,
    shedulePage: shedulePageReducer,
  },
});
