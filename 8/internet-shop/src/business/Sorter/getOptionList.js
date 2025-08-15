export const getOptionList = (options) => {
    const optionKeys = Object.keys(options);

    return optionKeys.map((optionKey) => options[optionKey]);
};