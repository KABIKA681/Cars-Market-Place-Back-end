const express = require('express');
const app = express();
const hbs = require('express-handlebars');

const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
app.use('/css', express.static(__dirname + 'public/css'))
require('./server/database/database')();
app.set('view engine', 'hbs');
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir:path.join(__dirname, 'Views'),
    partialsDir:path.join(__dirname, 'Views/partials')

}))

//calling route
app.use('/',require('./server/router/router'));

app.listen(3001, ()=>{
    console.log('Server Started on http://localhost:3001');
})