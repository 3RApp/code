import React, { useState, Fragment } from 'react';

export const TodoItem = ({ title }) => {
    
    const [checked, setChecked] = useState(false);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);

    const handleClick = () => setChecked(checked => !checked);

    const handleMouseMove = (e) => {
        setXCoord(e.screenX);
        setYCoord(e.screenY);
    }

    return (
        <li onClick={handleClick} onMouseMove={handleMouseMove}>
            <input type="checkbox" checked={checked} />
            { title }
            <div>
                Текущие координаты мыши на элементе:
                <div>
                    <span>X: {xCoord}</span>
                    <span>Y: {yCoord}</span>
                </div>  
            </div>
        </li>
    );
}

export const TodoList = ({ todoList }) => {
    return (
        <Fragment>
            {
                todoList.map(({ id, title }) => <TodoItem key={id} title={title} />)
            }
        </Fragment>
    );
}

function App() {

    const todoList = [
        { id: 't45Iza', title: 'Сбрить бороду', },
        { id: 'z9saq1', title: 'Отварить курицу', },
        { id: 'u3en27', title: 'Сделать упражнения', }
    ];
    return (
      <div className="App">
        <TodoList todoList={todoList} />
      </div>
    );
  }
  
  export default App;