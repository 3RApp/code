import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ParentContextComponent } from './5.45';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentContextComponent />
  </React.StrictMode>
);
