import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ComponentWithRef } from './5.66';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentWithRef />
  </React.StrictMode>
);
