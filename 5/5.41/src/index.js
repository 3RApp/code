import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { EventResizeDOMElement } from './5.41';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventResizeDOMElement />
  </React.StrictMode>
);
