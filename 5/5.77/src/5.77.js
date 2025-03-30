import React, { useCallback, useState } from 'react';

export const UselessMemoizedFn = () => {
    const [count, setCount] = useState(0);

    const memoizedFn = useCallback(() => { 
        console.log("called");
        return setCount(count => count + 1);
    });
    
    return (<button onClick={memoizedFn}>{count}</button>)
}