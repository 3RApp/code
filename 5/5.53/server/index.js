const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ type: 'multipart/form-data', extended: false }));

const port = process.env.PORT || 4000;

app.use('/', index);

app.listen(port, () => {
    console.log('Server listening on port ', port);
});
