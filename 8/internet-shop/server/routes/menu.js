const {Router} = require('express')
const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const router = Router()

const headers = require('./headers');

router.get('/menu/categories', function(req, res){
    
    fs.readFile(path.join(cwd, "/data/categories.json"), "utf-8", (err, dataString) => {

        // return res.json({success: false, error: "Ошибка при загрузке данных"});

        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const json = JSON.parse(dataString);
            
            res.set(headers);

            res.json({ success: true, data: json });
        }
    });
});

router.get('/menu/categories/:categoryID/subcategories', function(req, res){
    const {categoryID: paramCategoryID} = req.params;

    fs.readFile(path.join(cwd, "/data/subcategories.json"), "utf-8", (err, dataString) => {
        if (err){
            console.error(err.message);
            res.json({success: false, error: err.message});
        } else {
            const json = JSON.parse(dataString);
            const subcategoryList = json[paramCategoryID].map(subcategory => {
                const { uid, categoryID, title, urlUniqueKey } = subcategory;

                return { 
                    uid, 
                    categoryID, 
                    title, 
                    urlUniqueKey 
                };
            });

            res.set(headers);

            if (subcategoryList){
                res.json({ success: true, data: subcategoryList });
            } else {
                res.json({ success: false, subcategories: null, message: 'Для данной категории не существует подкатегории' });
            }
        }
    });
});

module.exports = router