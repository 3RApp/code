const {Router} = require('express');
const { v4 } = require('uuid');

const { readFile, writeFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const router = Router();

const headers = require('./headers');

async function registerOrder(res, ordersDataPath){

    res.set(headers);

    try {
        const ordersFilePath = resolve(ordersDataPath);

        const ordersJson = await readFile(ordersFilePath, 'utf-8');
        const orders = JSON.parse(ordersJson);
        
        orders.lastOrder++;

        const orderId = v4();

        orders[orderId] = {
            orderNumber: orders.lastOrder
        };

        await writeFile(ordersDataPath, JSON.stringify(orders), {encoding: "utf-8"});

        res.json({ success: true, data: orderId });

    } catch(e){
        console.error(e.message);
        res.json({ success: false, error: "Произошла ошибка" });
    }
}

async function patchOrder(res, body, ordersDataPath){
    
    res.set(headers);

    try {
        const ordersFilePath = resolve(ordersDataPath);
        const { orderId, ...rest } = body;

        const ordersJson = await readFile(ordersFilePath, 'utf-8');
        const orders = JSON.parse(ordersJson);
        
        orders[orderId] = {
            ...orders[orderId],
            ...rest,
        };

        await writeFile(ordersDataPath, JSON.stringify(orders), {encoding: "utf-8"});

        res.json({ success: true, data: `Заказ № ${orders.lastOrder} с id ${orderId} создан` });

    } catch(e){
        console.error(e.message);
        res.json({ success: false, error: "Произошла ошибка" });
    }
}

async function getOrders(res, ordersDataPath) {
    const ordersFilePath = resolve(ordersDataPath);

    const ordersJson = await readFile(ordersFilePath, 'utf-8');
    const orders = JSON.parse(ordersJson);

    res.set(headers);
    res.json({ success: true, data: orders });
}

router.post('/orders/create', function(req, res){

    registerOrder(res, './data/orders_test.json');
});

router.patch('/orders/create', function(req, res){

    patchOrder(res, req.body, './data/orders_test.json');
});

router.get('/orders', function(req, res){
    getOrders(res, './data/orders.json');
});

module.exports = router