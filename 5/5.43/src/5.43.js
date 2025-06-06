import React, {useState} from 'react';
import star_empty from './images/star_empty.svg';
import star_filled from './images/star_filled.svg';

export const Star = () => {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => setIsFilled(!isFilled);

    return (<img onClick={handleClick} 
        src={isFilled ? star_filled : star_empty} 
    />);
}