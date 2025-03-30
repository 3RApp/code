import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Person } from './5.25';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person id={2} />
  </React.StrictMode>
);
