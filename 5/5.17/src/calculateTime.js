export const calculateTime = (min, sec, reset) => {

    if (reset || (min === 59 && sec === 59)) {
        return { min:  0, sec:  0 };
    }
    if (sec < 59) {
        return { min, sec: sec + 1 };
    }
    if (sec ===  59 && min < 59)  {
        return { min:  min + 1, sec: 0 };
    }
   
    return { min:  min + 1, sec };
};
