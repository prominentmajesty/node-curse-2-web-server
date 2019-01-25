
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var home = require('./routes/index');
var user = require('./routes/user');


var app = express();


app.use(express.static(__dirname + '/Static'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials'
}));
app.set('view engine', '.hbs');

app.use('/', home);
app.use('/user', user);

app.listen(3000, ()=>{
    console.log('App Is Up And Running At Port 3000');
});
