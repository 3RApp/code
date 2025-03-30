import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UseEffectCallSequence } from './5.28';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectCallSequence />
  </React.StrictMode>
);
