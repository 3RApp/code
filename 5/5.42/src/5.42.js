import React, { useState, Fragment } from 'react';

export const MonthsChanger = ({ months, startFrom = 0 }) => {
    const [currentMonth, setCurrentMonth] = useState(startFrom);
    const [isReset, setIsReset] = useState(false);

    const handleChangeMonth = (count) => {
        setIsReset(count === months.length - 1);
        setCurrentMonth(count);
    }

    return (
        <Fragment>
            <div>{months[currentMonth]}</div>
            <ButtonChanger onClick={handleChangeMonth} reset={isReset} startFrom={startFrom} />
        </Fragment>
    );
}

const ButtonChanger = ({ onClick, reset, startFrom = 0, decrement = false }) => {
    const [count, setCount] = useState(startFrom);
    const changeCount = (count) => decrement ? count - 1 : count + 1;

    const handleClick = () => {
        const nextCount = reset ? startFrom : changeCount(count);

        setCount(nextCount);
        onClick(nextCount);
    }

    return (<button onClick={handleClick}>{count}</button>);
}