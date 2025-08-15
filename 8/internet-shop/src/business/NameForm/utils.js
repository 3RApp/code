const acceptableSymbols = ['+', '-', '(', ')', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const filterAcceptableSymbols = (string) => string.split('').filter(symbol => acceptableSymbols.includes(symbol)).join('');

export const createHandleChangeFn = (actionCreator, dispatch) => {
    const handleChangeFn = (e) => {
        const name = e.target.value;

        dispatch(actionCreator({ name }));
    };

    return handleChangeFn;
};
