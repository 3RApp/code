/**
 * @description Данные в сторе хранятся в такой структуре { id: [price, count, data] }, где data = { uid, title, price, currencyCode, image }
 * Для создания списка для React преобразуем в массив
 */
export const modifyProductListStructure = (products) => {
    const productList = [];

    for (const tupleProductData of Object.values(products)) {
        const [price, count, data] = tupleProductData;

        productList.push({ ...data, price, count });
    }

    return productList;
};
