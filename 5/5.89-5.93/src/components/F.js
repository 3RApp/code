import { useState, useContext } from "react";
import { DataChangeContext } from "../contexts";

// Этот простой конечный компонент является потомком для компонента-предка DescendantAncestorVariant2 (бизнес-компонент и провайдер). 
// Он расположен src\business\DescendantAncestorVariant2.js

export const F = () => {
    const { onChange, initialState } = useContext(DataChangeContext);
    const [text, setText] = useState(initialState);
    
    const handleChange = (e) => {
        setText(e.target.value);
        onChange(e.target.value);
    };

    return <input type='text' value={text} onChange={handleChange} />;
};