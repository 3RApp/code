import { useContext } from "react";
import { DataChangeContext } from "../contexts";

// Этот простой конечный компонент является потомком для компонента-предка DescendantAncestorVariant1 (бизнес-компонент и провайдер). 
// Он расположен src\business\DescendantAncestorVariant1.js
// E.js
export const E = () => {
    const { text, onChange } = useContext(DataChangeContext);
    const handleChange = (e) =>onChange(e.target.value);

    return <input type='text' value={text} onChange={handleChange} />;
};