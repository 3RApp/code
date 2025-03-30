import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Component } from './Component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component name="фронтендер" messageCount={5} />
  </React.StrictMode>
);
