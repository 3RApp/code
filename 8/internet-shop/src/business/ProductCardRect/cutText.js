const getWordsByMaxLength = (text, maxLength) => {
    const words = text.split(' ');
    const wordsLength = words.length;

    for (let i = 0, textLength = 0; i < wordsLength; i++) {
        textLength += words[i].length + 1 /** единица учитывает пробельный символ между словами, а запятая включается в состав слова */;

        if (textLength < maxLength) {
            continue;
        }

        return words.slice(0, i - 1 /** единица уменьшает на одно слово массив, так как с текущим словом число символов превышает maxLength */).join(' ');
    }
};
// функция усекает текст по словам
export const cutText = (title, text, maxLength = 500) => {

    const common = text.concat(title);
    const symbolAmount = common.length;
    const maxTextLength = maxLength - title.length;

    if (symbolAmount > maxLength) {
        return `${getWordsByMaxLength(text, maxTextLength)} ...`;
    } else {
        return text;
    }
};