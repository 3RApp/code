import { useState, Fragment } from "react";
import { A } from "../components";

import './Common.css';

// Этот бизнес-компонент является родителем для дочернего компонента А
// расположенного в src\components\A.js

export const ParentChild = () => {

    const [text, setText] = useState('Измените текст');
    const handleChange = (e) => {setText(e.target.value);};

    return (
        <Fragment>
            <div className='row bgGray'>
                <div className='cell'>
                    Это родительский:
                </div>
                <div className='cell'>
                    <input type='text' value={text} onChange={handleChange} />
                </div>
            </div>
            <div className='row'>
                <div className='cell fontGray'>
                    Это дочерний:
                </div>
                <div className='cell'>
                    <A text={text} />
                </div>
            </div>
        </Fragment>
    );
};