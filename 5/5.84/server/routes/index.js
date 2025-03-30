const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

router.get('/', function (req, res) {
    
    res.send('It\'s ok');
});

router.get('/products/:id', function(req, res){
    fs.readFile(path.join(cwd, "/server/data/products.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {

            const { data } = JSON.parse(dataString);
            const product = data.find(product => product.id == req.params.id);

            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");

            if (!product){
                res.json({success: false, data: null, error: "Product not found"});
            } else {
                res.json({ success: true, data: product, error: null });
            }
        }
    });
});

module.exports = router