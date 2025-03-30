import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UselessMemoizedFn } from './5.77';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UselessMemoizedFn />
  </React.StrictMode>
);
