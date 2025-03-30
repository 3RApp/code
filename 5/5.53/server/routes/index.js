const {Router} = require('express')

const router = Router()

router.get('/', function () {
    
    res.send('It\'s ok');
});

router.post('/request', function(req, res){

    res.json({ success: true, data: {
        message: "Данные и их формат, которые получает сервер в теле запроса при сочетании enctype multipart/form-data и данных из FormData",
        data: req.body
    }, error: null });
});

module.exports = router