import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SecondUseEffectComponent } from './5.29';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecondUseEffectComponent />
  </React.StrictMode>
);
