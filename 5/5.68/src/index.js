import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DOMElementRef } from './5.68';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DOMElementRef />
  </React.StrictMode>
);
