import React, {useState} from 'react';
import MemoizedComponent from './5.60';

import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <MemoizedComponent alwaysChangeInParent={count} />
      <button onClick={handleClick}>change count</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
