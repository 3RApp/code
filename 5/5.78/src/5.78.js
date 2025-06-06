import React, { Fragment, useState, memo, useCallback } from 'react';

const list = [{id: 1, value: 'Первый'}, {id: 2, value: 'Второй'}, 
{id: 3, value: 'Третий'}, {id: 4, value: 'Четвёртый'}, {id: 5, value: 'Пятый'},
{id: 6, value: 'Шестой'}, {id: 7, value: 'Седьмой'}, {id: 8, value: 'Восьмой'}];

const ListItem = ({ id, value, onClick }) => <button onClick={() => onClick(id)}>{value}</button>;
const MemoizedListItem = memo(ListItem);

export const MemoizedCallback = () => {
    const [pressedButtons, setPressedButton] = useState([]);
    const [count, setCount] = useState(0);

    const handleChangeCount = () => setCount(count => count + 1);

    return (<Fragment>
        <div>Вы нажали кнопки: {
            pressedButtons.map((pressed, key) => <span key={key}>{pressed}, </span>)
        }</div>
        Сменить состояние: <button onClick={handleChangeCount}>{count}</button>
        {
            list.map(({id, value}) => {
                const handleClick = useCallback((id) => {
                        console.log(`Кнопка ${id} была нажата`, ' и мы отслеживаем повторные вызовы этой функции');
                        return setPressedButton(pressedButtons => [...pressedButtons, id])
                    }, []);

                return <MemoizedListItem 
                    key={id} id={id} onClick={handleClick} value={value} />
            })
        }
    </Fragment>);
}