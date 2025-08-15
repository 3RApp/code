const { v4 } = require('uuid');

const product = {
    "title": "Разработка фронтенд-приложений",
    "vendorTitle": "Питер",
    "humanSubcategoryTitle": "Техлит",
    "price": 2200,
    "currencyCode": "RUB",
    "description": "Разработка фронтенд-приложений с помощью стека 3RApp. Впервые описанная процедура проектирования фронтенд-приложения. Чек-лист составления кода React-компонента.",
    "urlUniqueKey": "3rapp-razrabotka-fronted-prilozhenii",
    "categoryId": "d1e5a4c5-b6a3-e4f5-c8a8-f9c8a8b6e1d5",
    "subcategoryId": "489272ab-f6dc-4142-98ff-6e6016802cfe",
    "vendorId": "f29b8152-deeb-40a2-af66-4e48a184e344",
    "index": 1,
    "image": {
        "small": "a7f8c2d1-b524-49b2-a6eb-fae61971194a",
        "middle": "4b9623fe-e23d-48bc-beac-c1a2135e06cc",
        "big": "7e6893cd-d207-40f6-ad63-ab576a0255fa"
    }
};

export const createMockProductList = (productCount = 350, refresh = false) => {
    if (productCount in createMockProductList.memo && !refresh) {
        return createMockProductList.memo[productCount];
    }

    const productList = new Array(productCount).fill(product).map(product => ({...product, uid: v4() }));

    createMockProductList.memo[productCount] = productList;

    return productList;
}

createMockProductList.memo = {};

export const productList = createMockProductList();
