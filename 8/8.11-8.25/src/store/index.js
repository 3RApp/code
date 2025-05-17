import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/auth';
import sheduleReducer from './features/shedule';

export const store = configureStore({
  reducer: {
    isAuthenticated: loginReducer,
    shedulePage: sheduleReducer,
  },
});
