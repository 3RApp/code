const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

router.post('/analytics', function(req, res){

    fs.readFile(path.join(cwd, "/server/data/analytics.json"), "utf-8", (err, json) => {
        if (err) {
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            
            const analytics = JSON.parse(json);
            analytics.push(req.body);
            
            fs.writeFile(path.join(cwd, "/server/data/analytics.json"), JSON.stringify(analytics), (err) => {
                if (err) {
                    console.error(err.message);
                    res.json({success: false, error: err.message});
                } else {
                    res.json({success: true});
                }
            })
        }
    });
});

module.exports = router