export const extractBasketData = (product) => {
    const { uid, title, price, currencyCode, image} = product;

    return {
        uid,
        title,
        price,
        currencyCode,
        image: image.small,
    }
};