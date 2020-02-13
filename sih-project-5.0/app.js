var express = require('express');
var signup = require('./controllers/signupcontroller');
var login = require('./controllers/logincontroller');

var app = express();

app.use('/assets',express.static('./public/assets'));
app.set('view engine','ejs');

signup(app);
login(app);


app.listen(3000);
console.log('you are listening to port 3000');
