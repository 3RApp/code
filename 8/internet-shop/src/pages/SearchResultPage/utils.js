export const extractProductData = (aggregatedData) => {
    const { data: { search, productList }} = aggregatedData;

    return {length: productList.length, list: productList.map(item => item.product), search };
};