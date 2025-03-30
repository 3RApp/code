import { useState } from "react";
import {MiddleBetweenAncestorDescendant1} from "./MiddleBetweenAncestorDescendant1";
import { DataChangeContext } from "../contexts";

// Этот бизнес-компонент и провайдер является предком для компонента-потомка D
// расположенного в src\components\D.js

export const AncestorDescendant = () => {
    const [text, setText] = useState('Измените текст');
    const handleChange = (e) => {setText(e.target.value);};

    return (
        <DataChangeContext.Provider value={{text}}>
            <div className='row bgGray'>
                <div className='cell'>
                    Это предок:
                </div>
                <div className='cell'>
                    <input type='text' value={text} onChange={handleChange} />
                </div>
            </div>
            <div className='row'>
                <div className='cell fontGray'>
                    Это потомок:
                </div>
                <div className='cell'>
                    <MiddleBetweenAncestorDescendant1 />
                </div>
            </div>
        </DataChangeContext.Provider>
    );
};