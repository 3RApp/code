import React from 'react';
import { MonthsChanger } from './5.42';
import './App.css';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function App() {
  return (
    <div className="App">
      <MonthsChanger months={months} startFrom={6} />
    </div>
  );
}

export default App;
