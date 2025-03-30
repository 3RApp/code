const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

router.get('/', function (req, res) {
    
    res.send('It\'s ok');
});

router.get('/persons/:id', function(req, res){
    fs.readFile(path.join(cwd, "/server/data/persons.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {

            const { data } = JSON.parse(dataString);
            const person = data.find(person => person.id == req.params.id);

            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Origin", "*");

            if (!person){
                res.json({success: false, data: null, error: "Person not found"});
            } else {
                res.json({ success: true, data: person, error: null });
            }
        }
    });
});

module.exports = router