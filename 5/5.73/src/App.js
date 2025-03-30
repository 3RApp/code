import React from 'react';
import { ComponentWithUseMemo } from './5.73';
import { generateUserList } from './generateUserList';

import './App.css';

const productList = generateUserList();

function App() {
  return (
    <div className="App">
      <ComponentWithUseMemo productList={productList} />
    </div>
  );
}

export default App;
