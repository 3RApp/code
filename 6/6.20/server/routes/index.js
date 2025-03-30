const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const concurrentlyStartPath = "/server";

const router = Router()

router.get('/disciplines', function(req, res){

    fs.readFile(path.join(cwd, `${concurrentlyStartPath}/data/disciplines.json`), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const disciplines = JSON.parse(dataString);

            const discipline = disciplines.data.find(discipline => discipline.name.toLowerCase() === req.query.name.toLowerCase());

            if (!discipline){
                res.json({success: false, error: "Дисциплина не найдена"});
            } else {

                res.json({success: true, data: discipline[req.query.attr]});
            }
        }
    });
});

module.exports = router