import {useState} from "react";
import {ChildParentVariant1, ChildParentVariant2} from '../business';

export const ChildParentPage = () => {
    const [variant, setVariant] = useState(1);

    return (
        <div>
            <h1>Дочерний-Родитель</h1>
            <button onClick={() => setVariant(1)}>Вариант 1</button>
            <button onClick={() => setVariant(2)}>Вариант 2</button>
            {variant === 1 && <h2>Это вариант 1</h2>}
            {variant === 2 && <h2>Это вариант 2</h2>}
            {variant === 1 && <ChildParentVariant1/>}
            {variant === 2 && <ChildParentVariant2/>}
            <cite>
                Оба варианта выглядят одинаково. Но есть разница в том, в скольких местах обновляются состояния.
            </cite>
        </div>
    );
}