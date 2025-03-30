import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StarRating } from './5.44';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating amount={6} />
  </React.StrictMode>
);
