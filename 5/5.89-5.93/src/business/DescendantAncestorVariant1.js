import { useState } from "react";
import {MiddleBetweenAncestorDescendant2} from "./MiddleBetweenAncestorDescendant2";
import { DataChangeContext } from "../contexts";

// Этот бизнес-компонент и провайдер является предком для компонента-потомка E
// расположенного в src\components\E.js

export const DescendantAncestorVariant1 = () => {
    const [text, setText] = useState('Измените текст');
    const handleChange = (value) => {setText(value);};

    return (
        <DataChangeContext.Provider value={{text, onChange: handleChange}}>
            <div className='row bgGray'>
                <div className='cell'>
                    Это предок:
                </div>
                <div className='cell'>
                    {text}
                </div>
            </div>
            <div className='row'>
                <div className='cell fontGray'>
                    Это потомок:
                </div>
                <div className='cell'>
                    <MiddleBetweenAncestorDescendant2 />
                </div>
            </div>
        </DataChangeContext.Provider>
    );
}