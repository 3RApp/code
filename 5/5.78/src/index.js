import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MemoizedCallback } from './5.78';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoizedCallback />
  </React.StrictMode>
);
