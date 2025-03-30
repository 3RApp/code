import { useState } from'react';

// Этот простой конечный компонент является дочерним компонентом для бизнес-компонент ParentChild. 
// Он расположен src\business\ChildParentVariant2.js

export const C = ({ onChange, initialState }) => {
    const [text, setText] = useState(initialState);

    const handleChange = (e) => {
        setText(e.target.value);
        onChange(e.target.value);
    }

    return <input type='text' value={text} onChange={handleChange} />;
};