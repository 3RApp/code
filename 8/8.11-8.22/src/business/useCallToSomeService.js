import { useState, useCallback } from'react'
export const useCallToSomeService = () => {
    const [someUselessVar, setSomeUselessVar] = useState(0);

    function uselessFn () {
        setSomeUselessVar(someUselessVar + 1);
    }

    // если применить useCallback то значение переменной someUselessVar изменится ровно один раз
    return uselessFn;
}