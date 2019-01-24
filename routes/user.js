
var express = require('express');

var router = express.Router();

router.get('/menu', (req, res)=>{

  res.render('menu',{

          title : 'menu',
          style : 'menuCss.css',
          script : 'menuscript.js'
   });
});

router.get('/member', function(req, res){

    res.render('member', {

              title : 'member',
              style : 'member.css',
              script : 'member.js'
    });
});

module.exports = router;
