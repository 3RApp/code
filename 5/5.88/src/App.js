import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          <span>Издательство </span>
          <a
            className="App-link"
            href="https://piter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Питер"
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
