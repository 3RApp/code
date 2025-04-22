import React from 'react';
import { TreeNode } from './business';
import { bookCatalogTree } from './bookCatalogTree';

import './App.css';

function App() {

  return (
    <div className="App">
      <TreeNode node={bookCatalogTree} />
    </div>
  );
}

export default App;
