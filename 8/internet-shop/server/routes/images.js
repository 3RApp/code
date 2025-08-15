const {Router} = require('express');

const router = Router();

router.get('/images/:id', async function(req, res){
    const {id} = req.params;

    if (id === "filler-big") {
      res.sendFile(`${process.cwd()}/assets/3e1b7c95-2a4f-456e-81bd-f026375a84d1.svg`,  function(err){
        if(err){
            console.error(`Изображение filler-big не найдено`, err);
        }
     });
    }

     res.sendFile(`${process.cwd()}/assets/${id}.svg`, function(err){
        if(err){
            console.error(`Изображение с id ${id} не найдено`, err);
        }
     });
});

module.exports = router