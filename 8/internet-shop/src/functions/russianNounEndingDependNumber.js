export const russianNounEndingDependNumber = (number, nounRoot) => {
    
    const rest10 = number % 10;
    const rest100 = number % 100;
    
    if (rest10 === 1 && rest100 !== 11) {
        return nounRoot;
    } else if ([2, 3, 4].includes(rest10) && ![12, 13, 14].includes(rest100)) {
        return nounRoot.concat('а');
    } else {
        return nounRoot.concat('ов');
    }
};