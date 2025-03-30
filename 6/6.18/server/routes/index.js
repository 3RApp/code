const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const {updateLastId} = require('./utils');
const concurrentlyStartPath = "/server";

const router = Router()

router.get('/products', function(req, res){
    fs.readFile(path.join(cwd, `${concurrentlyStartPath}/data/products.json`), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const products = JSON.parse(dataString);
            res.json(products.data);
        }
    });
});

router.get('/orders', function(req, res){
    fs.readFile(path.join(cwd, `${concurrentlyStartPath}/data/orders.json`), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const orders = JSON.parse(dataString);
            res.json(orders.data);
        }
    });
});

router.post('/orders', function(req, res){

    fs.readFile(path.join(cwd, "/server/data/orders.json"), "utf-8", (err, json) => {
        if (err) {
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            
            const orders = JSON.parse(json);
            
            const lastId = orders.lastId === null ? 1 : orders.lastId + 1;
            const data = orders.data.concat({ ...req.body, id: lastId });

            fs.writeFile(path.join(cwd, "/server/data/orders.json"), JSON.stringify({ lastId, data }), (err) => {
                if (err) {
                    console.error(err.message);
                    res.json({success: false, error: err.message});
                } else {
                    res.json({success: true});
                }
            })
        }
    });
});

router.delete('/orders', function(req, res){

    const {orderId} = req.body;

    if (!orderId){
        res.json({success: false, error: "No id presented"});
    }

    fs.readFile(path.join(cwd, "/server/data/orders.json"), "utf-8", (err, json) => {
        if (err) {
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const {lastId, data} = JSON.parse(json);
            const isUidEqualLastId = Number(orderId) === lastId;
            let jsonData;

            if (isUidEqualLastId) {
                data.pop();
                const updatedLastId = updateLastId(data);
                jsonData = JSON.stringify({lastId: updatedLastId, data});
                
            } else {
                const filteredData = data.filter(item => item.id !== Number(orderId));
                jsonData = JSON.stringify({lastId, data: filteredData});
            }

            fs.writeFile(path.join(cwd, "/server/data/orders.json"), jsonData, (err) => {
                if (err){
                    console.error(err.message);
                    res.json({success: false, error: err.message});
                } else {
                    res.json({success: true});
                }
            });
        }
    });
});

router.patch('/orders', function(req, res){

    fs.readFile(path.join(cwd, "/server/data/orders.json"), "utf-8", (err, json) => {
        if (err) {
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {

            const {orderId, name, amount, comment} = req.body;
            const orders = JSON.parse(json);

            let isOrderUpdated = false;
            
            const updatedProductList = orders.data.map(order => {
                if (order.id === Number(orderId)){
                    isOrderUpdated = true;
                    return {...order, name, amount, comment}
                } else {
                    return order;
                }
            });

            if (!isOrderUpdated) {
                return res.json({success: false, error: 'Нет такого продукта' });
            }

            fs.writeFile(path.join(cwd, "/server/data/orders.json"), JSON.stringify({lastId: orders.lastId, data: updatedProductList}), (err) => {
                if (err) {
                    console.error(err.message);
                    res.json({success: false, error: err.message});
                } else {
                    res.json({success: true});
                }
            })
        }
    });
});

module.exports = router