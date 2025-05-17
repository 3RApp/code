import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from './sortingSlice';
import viewModeReducer from './viewModeSlice';
import menuAPIReducer, {menuAPI} from './menuAPI';
import productsAPIReducer, {productsAPI} from './productsAPI';

export const store = configureStore({
  reducer: {
    sorting: sortingReducer,
    viewMode: viewModeReducer,
    [menuAPI.reducerPath]: menuAPIReducer,
    [productsAPI.reducerPath]: productsAPIReducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware()
      .concat(menuAPI.middleware, productsAPI.middleware)
});
