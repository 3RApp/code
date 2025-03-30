import { useState } from "react";
import {MiddleBetweenAncestorDescendant3} from "./MiddleBetweenAncestorDescendant3";
import { DataChangeContext } from "../contexts";

// Этот бизнес-компонент и провайдер является предком для компонента-потомка F
// расположенного в src\components\F.js

export const DescendantAncestorVariant2 = () => {
    const INITIAL_STATE = 'Измените текст';
    const [text, setText] = useState(INITIAL_STATE);
    const handleChange = (value) => {setText(value);};

    return (
        <DataChangeContext.Provider value={{onChange: handleChange, initialState: INITIAL_STATE}}>
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
                    <MiddleBetweenAncestorDescendant3 />
                </div>
            </div>
        </DataChangeContext.Provider>
    );
}