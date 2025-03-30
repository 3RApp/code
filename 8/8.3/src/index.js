import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      {/* здесь будет еще компонент */}
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
