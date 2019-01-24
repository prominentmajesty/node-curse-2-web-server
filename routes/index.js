var express = require('express');

var router = express.Router();

router.get('/', (req, res)=>{

    res.render('index.hbs', {
        title : 'Home',
        style : 'homeCss.css',
        script : 'homeJavaScript.js'
    });
});

module.exports = router;
