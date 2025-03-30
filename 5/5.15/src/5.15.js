import React, { useState, useEffect } from 'react';

/**
 * В этом модуле два компонента объявлены вместе. Это сделано для демонстрации. 
 * В приложении их нужно объявлять в разных модулях.
 */

export const ClickCounter = ({ limit }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count => count === limit ? count : count + 1);

    useEffect(() => {
        document.title = `Вы нажали на кнопку ${count} раз`;
    }, [count]);

    return (
        <div>
            <p>
                Вы нажали на кнопку {count} раз.
            </p>
            <button onClick={handleClick}>Нажать</button>
        </div>
    );
}

export const Greeting = ({ title }) => {
    return (
        <section>
            <h3>Добрый день {title}!</h3>
            <ClickCounter limit={5} />
        </section>
    );
}