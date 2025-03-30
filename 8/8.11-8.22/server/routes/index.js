const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': '*',
};

router.get('/shedule/', function(req, res){
    fs.readFile(path.join(cwd, "/server/data/shedule.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const shedule = JSON.parse(dataString);
            res.set(headers);
            
            res.json(shedule);
        }
    });
});

router.get('/shedule/:sheduleID', function(req, res){
    // @TODO
    const {sheduleID} = req.params;
    fs.readFile(path.join(cwd, "/server/data/shedule.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const shedule = JSON.parse(dataString);
            res.set(headers);
            
            res.json(shedule);
        }
    });
});

router.get('/candidates/:candidateID', function(req, res){
    const {candidateID} = req.params;
    
    fs.readFile(path.join(cwd, "/server/data/candidates.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const candidates = JSON.parse(dataString);
            const candidate = candidates.find(item => item.candidateID === candidateID);

            res.set(headers);

            if (candidate){
                res.json({ success: true, candidate });
            } else {
                res.json({ success: false, candidate: null, message: 'Кандидат не найден' });
            }
        }
    });
});

router.post('/shedule/create', function(req, res){
    
    const {fio, vacancy} = req.body;

    try {
        res.json({success: true});
    } catch (e) {
        console.error(e.message);
        res.json({success: false, error: e.message});
    }
});

module.exports = router