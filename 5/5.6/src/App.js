import React, { useState } from 'react';
import { FunctionComponent } from './5.6';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <FunctionComponent title="Читатель книги" count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
