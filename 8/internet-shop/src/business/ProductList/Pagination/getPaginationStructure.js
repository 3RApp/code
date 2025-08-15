/**
 * @description На основе входящих параметров и изменяемого параметра index, возвращает структуру данных { pagination, index } 
 * Где pagination - массив с индексами и булевыми значениями, представляющими ellipsis. Пример: [0,1,2,true,6,7,8,true,12,13,14]. 
 * Здесь head, tail равны 3. Они задаются параметром edge.
 * А index - скорректированный индекс, указывающий на текущий выделенный элемент.
 * Фактически здесь два вида алгоритма: 1) создаёт выборку из множества элементов, 2) осуществляет маппинг index на элемент из выборки.
 * Оба работают учитывая ограничения, задаваемые параметрами page и edge.
 * 
 * Выходная структура данных разбивается на зоны: head, ellipsis, middle, ellipsis, tail
 * Возможные действия с зонами, если мысленно представить, как числа в UI представляют кнопки с номерами страниц (число + 1), а булевы значения - ellipsis:
 * 1) Кнопки в head и tail могут передать значение index в этих же зонах и это не изменяет структуру данных. Такой же результат даёт нажатие на кнопки "<<" и ">>".
 * Говоря не изменяя структуру данных имеется ввиду нормальная структура данных [0,1,2,true,6,7,8,true,12,13,14]. При этом числа в middle и tail
 *  разумеется будут иными или возможно такими же, но структура будет состоять из числа элементов равным 2 * edge + 3 (для middle) + 2 
 * (для ellipsis, по одному с каждой стороны). Это полная форма. 
 * Полная форма возможна, когда при условии: page >= 2 * edge + 3 (для middle) + 2 (для ellipsis).
 * 
 * Алгоритм работает декларативно, без состояния. Он построен на простых правилах реализованных в коде. Основная управляющая переменная - параметр index.
 * 
 *         
 * Алгоритм маппинга индекса на элемент из выборки
 * Есть полная структура данных:
 * I) [0, 1, 2,     3, 4, 5,     6, 7, 8,    9, 10, 11,     12, 13, 14]
 * но на выходе мы получаем:
 * II) [0, 1, 2,      true,       6, 7, 8,      true,       12, 13, 14]
 * а значит нужно скорректировать index для выходной структуры данных. 
 * 1. Определить в какой зоне head, middle, tail находится index. Здесь речь идёт о тех зонах, которые получены из etalon, структуры, что представлена в I. 
 * 2. Если index находится в head, то вернуть index.
 * 3. Если index находится в tail или middle, то придётся скорректировать. 
 *
 * @param {number} page - число страниц
 * @param {number} edge - число элементов в head, tail
 * @param {number} index - текущий индекс
 */
export const getPaginationStructure = (page, edge, index) => {

    // Обработка недопустимых значений
    if (page < 0){
        throw new Error(
            `Недопустимое значение page: ${page}. Ожидалось число больше или равно 0`
        );
    }

    if (edge <= 0 || edge > 4){
        throw new Error(
            `Недопустимое значение edge: ${edge}. Ожидалось число больше 0 и меньше или равно 4`
        );
    }

    if (index < 0 || index >= page){
        throw new Error(
            `Недопустимое значение index: ${index}. Ожидалось число больше или равно 0 и меньше или равно ${page - 1}`
        );
    }

    const MIDDLE = 3; // количество элементов в середине
    const ELLIPSIS = 3; // минимальное количество пропускаемых элементов в elllipsis для полной формы
    // Магические числа: 2 * edge - это размеры head и tail, задаваемые параметром edge. +2 - это 1 ellipsis слева и 1 ellipsis справа
    const FULL_MIN_LENGTH_TO_PACK = 2 * edge + MIDDLE + 2 * ELLIPSIS; 
    const FULL_MIN_PACKED_LENGTH = 2 * edge + MIDDLE + 2; 
    const etalon = [...new Array(page).keys()];
    const isNormal = page >= FULL_MIN_LENGTH_TO_PACK; // когда в ellipsis попадает минимум по 3 элемента и он заменяется одним элементом в выходной структуре
    const middleIndex = Math.floor(page / 2);
    const indexInTheMiddleList = [index - 1, index, index + 1];
    const ellipsis = true;

    if (isNormal) {

        const {head, middle, tail} = etalon.reduce((acc, item, index) => {
            
            if (index < edge) {
                acc.head.push(item);

                return acc;
            } else if (index > page - edge - 1) {
                acc.tail.push(item);

                return acc;
            }

            if (index === middleIndex) {
                acc.middle.push(item - 1);
                acc.middle.push(item);
                acc.middle.push(item + 1);

                return acc;
            }

            return acc;
        }, {head: [], middle: [], tail: []});
        
        const isIndexMiddle = index === middleIndex;
        const isIndexInHead = head.includes(index);
        const isIndexInTail = tail.includes(index);

        if (isIndexMiddle || isIndexInHead || isIndexInTail) {

            return {
                pagination: [...head, ellipsis, ...middle, ellipsis, ...tail],
                index: [edge + 2, index, index - page + 2 * edge + 2 + MIDDLE][[isIndexMiddle, isIndexInHead, isIndexInTail].findIndex(item => Boolean(item))]
            };
        } else if (index < middleIndex) {
            // 1 - это ellipsis
            const minLeftLength = edge + 1 + MIDDLE;

            if (index < minLeftLength) {

                return {
                    pagination: [...new Array(minLeftLength).fill(minLeftLength).map((num, idx) => num - (idx + 1)).reverse(), ellipsis, ...tail],
                    index: index,
                };
            }
            
        } else {
            // 1 - это ellipsis
            const minRightIndex = page - (edge + 1 + MIDDLE);

            if (index >= minRightIndex) {

                return {
                    pagination: [...head, ellipsis, ...new Array(page - minRightIndex).fill(minRightIndex).map((num, idx) => num + idx)],
                    index: index - page + FULL_MIN_PACKED_LENGTH,
                };
            }
        }

        return {
            pagination: [...head, ellipsis, ...indexInTheMiddleList, ellipsis, ...tail],
            index: edge + 2, // Магическое число 2. Для эллипсис отводится одна ячейка и одна для начала мидл.
        };
    }

    if (page <= FULL_MIN_PACKED_LENGTH) {
        return { 
            pagination: etalon, 
            index 
        };
    }

    const ellipsisLength = page - FULL_MIN_PACKED_LENGTH + 1;

    const {head, ellipsis: ellipsisList, tail} = etalon.reduce((acc, item, index) => {

        if (index < edge + 1) {
            acc.head.push(item);

            return acc;
        } else if (index > edge + ellipsisLength) {
            acc.tail.push(item);

            return acc;
        }

        acc.ellipsis.push(item);
        return acc;

    }, {head: [], ellipsis: [], tail: []});

    const isIndexInHead = head.includes(index);
    const isIndexInTail = tail.includes(index);

    if (isIndexInHead || isIndexInTail) {

        return {
            pagination: [...head, ellipsis, ...tail],
            index: [index, index - ellipsisLength + 1][[isIndexInHead, isIndexInTail].findIndex(item => Boolean(item))],
        };
    }

    const offset = ellipsisLength - 1;

    return {
        pagination: [...([...head, ...ellipsisList].slice(offset)), ...tail],
        index: index - offset,
    };
};