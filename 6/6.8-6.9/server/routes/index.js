const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

router.get('/', function (req, res) {
    
    res.send('It\'s ok');
});

router.get('/books/:id', function(req, res){
    fs.readFile(path.join(cwd, "/server/data/books.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {

            const { data } = JSON.parse(dataString);
            const book = data.find(book => book.id == req.params.id);

            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");

            if (!book){
                res.json({success: false, data: null, error: "Книга не найдена"});
            } else {
                res.json({ success: true, data: book, error: null });
            }
        }
    });
});

router.get('/images/books/:imagefilename', function(req, res){
    const filename = req.params.imagefilename;

    const imagePath = path.join(__dirname, '../../public/images', `${filename}`);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).send('Изображение не найдено');
    }

    res.sendFile(imagePath);
});

module.exports = router