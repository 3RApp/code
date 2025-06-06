import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ComponentWithFn } from './5.75';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentWithFn />
  </React.StrictMode>
);
