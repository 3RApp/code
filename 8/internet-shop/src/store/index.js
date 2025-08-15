import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketSlice';
import sortingReducer from './sortingSlice';
import viewModeReducer from './viewModeSlice';
import paginationReducer from './paginationSlice';
import filterReducer from './filterSlice';
import customerReducer from './customerSlice';
import deliveryReducer from './deliverySlice';
import favoriteReducer from './favoriteSlice';
import orderIdReducer from './orderIdSlice';
import menuAPIReducer, {menuAPI} from './menuAPI';
import productsAPIReducer, {productsAPI} from './productsAPI';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    sorting: sortingReducer,
    viewMode: viewModeReducer,
    pagination: paginationReducer,
    filter: filterReducer,
    customer: customerReducer,
    delivery: deliveryReducer,
    orderId: orderIdReducer,
    favorite: favoriteReducer,
    [menuAPI.reducerPath]: menuAPIReducer,
    [productsAPI.reducerPath]: productsAPIReducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware()
      .concat(menuAPI.middleware, productsAPI.middleware)
});
