const {Router} = require('express');

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const router = Router();

const { 
    getStartEndIndexesOccurrences, 
    getSpecial, 
    getLastOrderedOrPopular, 
    createProductData, 
    createVendorData,
    getRandomFromList 
} = require('./utils');

const headers = require('./headers');

async function getSpecialProducts(res, productDataPath, imageDataPath, set) {
    const imageFilePath = resolve(imageDataPath);
    const productsFilePath = resolve(productDataPath);

    const products = await readFile(productsFilePath, 'utf-8');
    const images = await readFile(imageFilePath, 'utf-8');

    const productsKeys = Reflect.ownKeys(JSON.parse(products));

    const mapSet = {
        special: getSpecial,
        popular: getLastOrderedOrPopular,
        lastordered: getLastOrderedOrPopular
    };

    const productList = createProductData(JSON.parse(images), JSON.parse(products), mapSet[set](productsKeys));

    res.set(headers);
    res.json({ success: true, data: productList });
}

async function getPopularByCategory(res, subcategoryDataPath, productDataPath, imageDataPath) {
    const imageFilePath = resolve(imageDataPath);
    const productsFilePath = resolve(productDataPath);
    const subcategoryFilePath = resolve(subcategoryDataPath);

    const productsJson = await readFile(productsFilePath, 'utf-8');
    const imagesJson = await readFile(imageFilePath, 'utf-8');
    const subcategoryJson = await readFile(subcategoryFilePath, 'utf-8');

    const subcategories = JSON.parse(subcategoryJson);
    const images = JSON.parse(imagesJson);
    const products = JSON.parse(productsJson);
    const productsKeys = Reflect.ownKeys(products);

    const choosenVendors = Reflect.ownKeys(subcategories).reduce((acc, category) => {
        const vendorListId = getRandomFromList(subcategories[category], 2).map(subcategory => {
            const [verndorId] = subcategory.vendorListId;
            
            return verndorId;
        });

        return [...acc, ...vendorListId];
    }, []);

    const usedVendor = [];

    const productListByVendor = productsKeys.filter(product => {
        const productData = products[product];

        if (usedVendor.includes(productData.vendorId)) {
            return false;
        }

        const isInclude = choosenVendors.includes(productData.vendorId);

        if (isInclude) {
            usedVendor.push(productData.vendorId);

            return true;
        }

        return false;
    });

    const popularProductsByCategory = createProductData(images, products, productListByVendor);

    res.set(headers);
    res.json({ success: true, data: popularProductsByCategory });
    // res.json({success: false, error: "Ошибка при загрузке данных"});
}

async function getPopularFromCategory(res, categoryId, productDataPath, imageDataPath) {
    const imageFilePath = resolve(imageDataPath);
    const productsFilePath = resolve(productDataPath);

    const productsJson = await readFile(productsFilePath, 'utf-8');
    const imagesJson = await readFile(imageFilePath, 'utf-8');

    const products = JSON.parse(productsJson);
    const images = JSON.parse(imagesJson);

    const productsKeys = Reflect.ownKeys(products);

    const productListByCategory = productsKeys.filter(productId => {
        const productData = products[productId];
        
        return productData.categoryId === categoryId;
    });

    const popularProductsFromCategory = createProductData(images, products, getRandomFromList(productListByCategory, 12));

    res.set(headers);
    res.json({ success: true, data: popularProductsFromCategory });
}

async function getProductsBySubcategory(res, categoryID, subcategoryID, productDataPath, imageDataPath) {
    const imageFilePath = resolve(imageDataPath);
    const productsFilePath = resolve(productDataPath);

    const productsJson = await readFile(productsFilePath, 'utf-8');
    const imagesJson = await readFile(imageFilePath, 'utf-8');

    const products = JSON.parse(productsJson);
    const images = JSON.parse(imagesJson);

    const productsKeys = Reflect.ownKeys(products);
    const filteredProductListBySubcategory = productsKeys.filter(productId => {
        const productData = products[productId];

        return productData.subcategoryId === subcategoryID && productData.categoryId === categoryID;
    });

    const productListBySubcategory = createProductData(images, products, filteredProductListBySubcategory);

    res.set(headers);
    res.json({ success: true, data: productListBySubcategory });
}

async function getVendors(res, categoryID, subcategoryID, productDataPath) {
    const productsFilePath = resolve(productDataPath);

    const productsJson = await readFile(productsFilePath, 'utf-8');
    const products = JSON.parse(productsJson);

    const productsKeys = Reflect.ownKeys(products);
    
    const filteredProductListBySubcategory = productsKeys.filter(productId => {
        const productData = products[productId];

        return productData.subcategoryId === subcategoryID && productData.categoryId === categoryID;
    });

    const vendors = createVendorData(products, filteredProductListBySubcategory);

    res.set(headers);
    res.json({ success: true, data: vendors });
}

async function getProductByID(res, productID, productDataPath, imageDataPath) {
    const imageFilePath = resolve(imageDataPath);
    const productsFilePath = resolve(productDataPath);

    const productsJson = await readFile(productsFilePath, 'utf-8');
    const imagesJson = await readFile(imageFilePath, 'utf-8');

    const products = JSON.parse(productsJson);
    const images = JSON.parse(imagesJson);

    const productData = products[productID];
    const productImageData = images[productID] ?? images.universal;

    res.set(headers);
    res.json({ success: true, data: {...productData, image: productImageData } });
}

async function getSearchResults(res, query, productDataPath, imageDataPath) {

    const productFilePath = resolve(productDataPath);
    const imageFilePath = resolve(imageDataPath);

    const productsJson = await readFile(productFilePath, 'utf-8');
    const imagesJson = await readFile(imageFilePath, 'utf-8');

    const images = JSON.parse(imagesJson);
    const products = JSON.parse(productsJson);

    const productsKeys = Reflect.ownKeys(products);
    const mapIndexSource = ['title', 'vendorTitle', 'humanSubcategoryTitle', 'description'];

    const productList = productsKeys.reduce((acc, productKey) => {
        const productData = products[productKey];

        const { title, vendorTitle, humanSubcategoryTitle, description } = productData;
        /**
         * Индексы применяются для хайлайтинга текста в результатах поиска
         */
        const searchResult = [title, vendorTitle, humanSubcategoryTitle, description].reduce((founded, source, index) => {
            const occurences = getStartEndIndexesOccurrences(source.toLowerCase(), query.toLowerCase());

            if (occurences.length !== 0) {
                return {...founded, [mapIndexSource[index]]: occurences };
            }

            return founded;
        }, {});

        if (Reflect.ownKeys(searchResult).length === 0) {
            return acc;
        }

        const productImageData = images[productKey] ?? images.universal;

        return [...acc, { 
            product: { ...productData, image: productImageData },
            occurences: searchResult,
            search: query,
        }];

    }, []);

    res.set(headers);
    //res.json({ success: false, error: "Error to get product list" }); // status code 200
    res.json({ success: true, data: { search: query, productList } });
}

router.get('/products/search', function(req, res){
    const {query} = req.query;

    getSearchResults(res, query, './data/products.json', './data/images.json');
});

router.get('/products/:productID', function(req, res){
    const {productID} = req.params;
    const preSet = ['special', 'popular', 'lastordered'];

    if (preSet.includes(productID)) {
        getSpecialProducts(res, './data/products.json', './data/images.json', productID);

        return;
    }

    getProductByID(res, productID, './data/products.json', './data/images.json');
});

router.get('/products/categories/:categoryID/subcategories/:subcategoryID', function(req, res){

    const {categoryID, subcategoryID} = req.params;

    if (subcategoryID === 'popular') {
        return getPopularFromCategory(
            res, 
            categoryID, 
            './data/products.json', 
            './data/images.json'
        );
    }
    getProductsBySubcategory(res, categoryID, subcategoryID, './data/products.json', './data/images.json');
});

router.get('/products/categories/:categoryID/subcategories/:subcategoryID/vendors', function(req, res){

    const {categoryID, subcategoryID} = req.params;

    getVendors(res, categoryID, subcategoryID, './data/products.json', './data/images.json');
});

router.get('/products/categories/popular', function(req, res){

    getPopularByCategory(res, './data/subcategories.json', './data/products.json', './data/images.json');
});

module.exports = router