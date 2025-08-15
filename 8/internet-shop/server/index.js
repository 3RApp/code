const {join} = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const products = require('./routes/products');
const menu = require('./routes/menu');
const delivery = require('./routes/delivery');
const orders = require('./routes/orders');
const images = require('./routes/images');

const app = express();
app.use(bodyParser.json({extended: false}));

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;

if (dev){
    app.use(express.static(join(__dirname, 'public')));
}

app.use('/api/v1', products);
app.use('/api/v1', menu);
app.use('/api/v1', delivery);
app.use('/api/v1', orders);
app.use('/api/v1', images);

app.listen(port, () => {
    console.log('Server listening on port ', port);
});