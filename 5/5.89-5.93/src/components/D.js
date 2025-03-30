import { useContext } from "react";
import { DataChangeContext } from "../contexts";

// Этот простой конечный компонент является потомком для компонента-предка AncestorDescendant (бизнес-компонент и провайдер). 
// Он расположен src\business\AncestorDescendant.js
// D.js
export const D = () => {
    const { text } = useContext(DataChangeContext);

    return <div>{text}</div>;
};