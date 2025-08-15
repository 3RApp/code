const {Router} = require('express');

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

const router = Router();

const headers = require('./headers');

async function getDeliveryServices(res, deliveryDataPath) {
    const deliveryFilePath = resolve(deliveryDataPath);

    const deliveryJson = await readFile(deliveryFilePath, 'utf-8');
    const deliveryServices = JSON.parse(deliveryJson);

    res.set(headers);
    res.json({ success: true, data: deliveryServices });
}

router.get('/delivery/services', function(req, res){

    getDeliveryServices(res, './data/delivery.json');
});

module.exports = router