import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClassComponent } from './5.5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassComponent />
  </React.StrictMode>
);
