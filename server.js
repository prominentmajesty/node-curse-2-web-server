
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
//var home = require('./routes/index');
var user = require('./routes/user');


var app = express();

app.get('/', (req, res)=>{
  res.render('index', {
      title : 'Home',
      style : 'homeCss.css',
      script : 'homeJavaScript.js'
  });
});


app.use(express.static(__dirname + '/Static'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials'
}));
app.set('view engine', '.hbs');

//app.use('/', home);
/*app.get('/', (req, res)=>{

    res.render('index', {
        title : 'Home',
        style : 'homeCss.css',
        script : 'homeJavaScript.js'
    });
});*/
app.use('/user', user);

app.use((req, res, next)=>{

  var err = new Errow('not found');
  err.status = 404;
  next(err);

});

if (app.get('env') === 'development') {
  app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.render('error',{
      massage:err.massage,
      error: err
    });
  });
}

app.use((err, req, res, next)=>{

  res.status(err.status || 500);
  res.render('error',{
    massage:err.massage,
    err:{}
  });

});

app.listen(3000, ()=>{
    console.log('App Is Up And Running At Port 3000');
});
