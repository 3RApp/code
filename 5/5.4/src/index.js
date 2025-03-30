import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ExampleComponent } from './5.4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExampleComponent />
  </React.StrictMode>
);
