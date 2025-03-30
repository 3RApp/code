import {useState} from'react';

import  './Header.css';

export const Header = ({ list, cb }) => {
    const [index, setIndex] = useState(0);
    const handleClick = (index) => {
        setIndex(index);
        cb(index);
    }
    const getClassName = (itemIndex) => itemIndex === index ? 'active' : 'nav-item';

    return (
        <header>
            <nav>
                {
                    list.map((itemName, index) => <span key={index} onClick={() => handleClick(index)} className={getClassName(index)}>{itemName}</span>)
                }
            </nav>
        </header>
    );
}