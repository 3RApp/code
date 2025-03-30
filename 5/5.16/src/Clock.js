import React, { useState, useEffect } from 'react';
import { calculateTime } from './calculateTime';

export const Clock = ({title, pause, onClick}) => {
    const [time, setTime] = useState({min: 0, sec: 0});
    const actionTitle = pause ? 'Старт' : 'Стоп';

    useEffect(() => {
        if (!pause) {
            setTimeout(() => {
                const {min, sec} = time;
                setTime(calculateTime(min, sec));
            }, 1000);
        }
    }, [time, pause]);

    const handleClick = () => !pause && onClick();

    return (
        <div className="clock">
            <h3 className="clock__title">{title}</h3>
            <button className="clock__btn" onClick={handleClick}>{actionTitle}</button>
            { time.min } : { time.sec }
        </div>
    );
};
