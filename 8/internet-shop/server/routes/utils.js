const createProductObject = (uid, productInfo, availableColors) => {
    
    const {title, description, price, width, length, height, weight, color, manufacturer} = productInfo;

    return {
        uid,
        title, 
        description,
        price,
        params: {
            width, length, height, weight,
        },
        attributes: {
            color,
            available: availableColors,
        },
        manufacturer,
    };
};

const updateLastId = (data) => {
    const length = data.length;
    const hasOnlyOne = length === 1;

    if (hasOnlyOne) {
        return null;
    }

    const {uid} = data[length - 2];

    return uid;
};

const getRandomFromList = (productList, amount) => {
    const maxIndex = productList.length - 1;
    const randomChoosenProducts = [];
    
    while (randomChoosenProducts.length < amount) {

        const index = Math.floor(Math.random() * maxIndex);

        if (!randomChoosenProducts.includes(index)) {
            randomChoosenProducts.push(index);
        }
    }

    return randomChoosenProducts.map(index => productList[index]);
};

const getStartEndIndexesOccurrences = (string, substring) => {
    const occurences = [];
    let index_string = 0;
    let index_substring = 0;

    while (index_string < string.length) {
        if (string.charAt(index_string) === substring.charAt(index_substring)){
            index_substring++;
        } else {
            index_substring = 0;
        }

        if (index_substring === substring.length) {
            occurences.push({ start: index_string - substring.length + 1, end: index_string });
            index_substring = 0;
        }
        index_string++;
    }

    return occurences;
};

const getSpecial = (productList) => productList.slice(0, 12);
const getLastOrderedOrPopular = (productList) => getRandomFromList(productList, 12);

const createProductData = (imageData, productData, productListKeys) => {

    const universal = imageData.universal;
    return productListKeys.map((productId) => {
        const productImageData = imageData[productId];
        const product = productData[productId];

        return {
            ...product,
            image: productImageData ?? universal,
        };
    });
};

const createVendorData = (productList, filteredProductListBySubcategory) => {

    const vendorsInProductList = filteredProductListBySubcategory.map((productId) => {
        const product = productList[productId];
        const { vendorId, vendorTitle } = product;

        return {
            vendorId, vendorTitle
        };
    });

    const vendorList = vendorsInProductList.reduce((acc, vendor) => {
        if(!acc.includes(vendor.vendorId)) {
           
           return [...acc, vendor.vendorId];
       }
       return acc;
    }, []);

    return vendorList.map((vendorId) => {
        const vendor = vendorsInProductList.find((vendor) => vendor.vendorId === vendorId);

        return vendor ? vendor : null;
    }).filter(vendor => vendor !== null);
}

module.exports = {
    createProductObject, 
    updateLastId, 
    getStartEndIndexesOccurrences, 
    getSpecial, 
    getLastOrderedOrPopular, 
    createProductData,
    createVendorData,
    getRandomFromList,
};
