import React from 'react';
import { ProductList } from './5.82';

import './App.css';

const productList = [{title: 'Булка'}, {title: 'Хлеб'}, {title: 'Рогалик'}];

function App() {
  return (
    <div className="App">
      <ProductList productList={productList} />
    </div>
  );
}

export default App;
