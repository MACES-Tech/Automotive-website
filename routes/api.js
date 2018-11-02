const express = require('express');

const router = express.Router();

router.get("/car_brand",function (req,res,next) {
    brand=['skoda','toyota']
        res.send(brand);
});


module.exports = router;