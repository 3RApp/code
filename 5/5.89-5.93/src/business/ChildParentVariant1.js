import { useState, Fragment } from "react";
import { B } from "../components";

import './Common.css';

// Этот бизнес-компонент является родителем для дочернего компонента B
// расположенного в src\components\B.js

export const ChildParentVariant1 = () => {

    const [text, setText] = useState('Измените текст');
    const handleChange = (e) => {
        setText(e.target.value);
    };

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
                    <B onChange={handleChange} text={text} />
                </div>
            </div>
        </Fragment>
    );
};