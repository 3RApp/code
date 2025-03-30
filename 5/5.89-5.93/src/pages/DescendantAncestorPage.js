import {useState} from "react";
import {DescendantAncestorVariant1, DescendantAncestorVariant2} from '../business';

export const DescendantAncestorPage = () => {
    const [variant, setVariant] = useState(1);

    return (
        <div>
            <h1>Потомок-Предок</h1>
            <button onClick={() => setVariant(1)}>Вариант 1</button>
            <button onClick={() => setVariant(2)}>Вариант 2</button>
            {variant === 1 && <h2>Это вариант 1</h2>}
            {variant === 2 && <h2>Это вариант 2</h2>}
            {variant === 1 && <DescendantAncestorVariant1/>}
            {variant === 2 && <DescendantAncestorVariant2/>}
            <cite>
                Оба варианта выглядят одинаково. Но есть разница в том, в скольких местах обновляются состояния.
            </cite>
        </div>
    );
};