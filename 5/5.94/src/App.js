import { useEffect } from 'react';
import { Business1, Business2 } from './business';
import { queueComponentName } from './utils';

import './App.css';

function App() {

  queueComponentName.queue("App");
  
  // поскольку вызываем WebAPI, используем useEffect
  useEffect(() => {
    for (const [order, componentName] of queueComponentName.dequeue().entries()){
      console.log(`%c${order} - ${componentName}`, 'background-color:rgb(202, 235, 202); color: #364a4e;');
    }
  }, []);
  
  return (
    <div className="App">
      <h1>Как работает DAG вызовов React-компонентов</h1>
      <p>... и как это соотносится с DAG React-компонентов и DOM-деревом</p>
      {/* Обратите внимание, что вначале следует Business2; Соотнесите вывод в консоль с порядком следования компонентов в JSX */}
      <Business2 />
      <Business1 />
    </div>
  );
}

export default App;
