import React from 'react';
import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { routes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
