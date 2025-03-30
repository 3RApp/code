const {Router} = require('express')

const router = Router()

router.get('/', function () {
    
    res.send('It\'s ok');
});

router.get('/request', function(req, res){

    res.json({ success: true, data: {
        message: "Данные, которые получает сервер в запросе",
        data: req.query
    }, error: null });
});

module.exports = router