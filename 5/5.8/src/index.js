import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GreetingComponent } from './5.8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GreetingComponent />
  </React.StrictMode>
);
