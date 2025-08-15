export const getProductListIndexes = (count, pageSize, currentPage) => {
    if (count <= pageSize) {
        return [0, count];
    } else {
        const startIndex = currentPage * pageSize;
        const endIndex = startIndex + pageSize;
        return [startIndex, endIndex];
    }
};