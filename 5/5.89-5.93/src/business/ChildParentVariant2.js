import { useState, Fragment } from "react";
import { C } from "../components";

import './Common.css';

// Этот бизнес-компонент является родителем для дочернего компонента C
// расположенного в src\components\C.js

export const ChildParentVariant2 = () => {

    const INITIAL_STATE = 'Измените текст';
    const [text, setText] = useState(INITIAL_STATE);
    const handleChange = (value) => {setText(value);};

    return (
        <Fragment>
            <div className='row bgGray'>
                <div className='cell'>
                    Это родительский:
                </div>
                <div className='cell'>
                    {text}
                </div>
            </div>
            <div className='row'>
                <div className='cell fontGray'>
                    Это дочерний:
                </div>
                <div className='cell'>
                    <C onChange={handleChange} initialState={INITIAL_STATE} />
                </div>
            </div>
        </Fragment>
    );
};