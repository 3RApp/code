import React, { useState } from 'react';
import { Person } from './5.26';
import './App.css';

function App() {
  const [id, setId] = useState(1);
  const handleClick = () => {
    const lastId = 3;
    if (id < lastId) {
      setId(id + 1);
    } else {
      setId(1);
    }
  };
  
  return (
    <div className="App">
      <Person id={id} />
      <button onClick={handleClick}>id: {id}</button>
    </div>
  );
}

export default App;
