import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ParentComponent } from './5.71';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
