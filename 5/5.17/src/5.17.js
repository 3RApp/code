import React from 'react';
import { ChessClock } from './ChessClock';
import './App.css';

export function App() {
  return (
    <div className="App">
      <ChessClock player1State={true} player2State={false} />
    </div>
  );
}
