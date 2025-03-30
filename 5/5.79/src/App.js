import React, { useState } from 'react';
import { OurComponent } from './5.79';

import './App.css';

function App() {
  const [dependency, setDependency] = useState(0);

  return (
    <div className="App">
      <OurComponent dependency={dependency} />
      <button onClick={() => setDependency(dependency + 1)}>Изменить значение dependency</button>
    </div>
  );
}

export default App;
