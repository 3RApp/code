import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from'react-router';
import { store } from './store';
import { routes } from './routes';

import "./index.module.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={routes} />
    </StoreProvider>
  </React.StrictMode>
);
