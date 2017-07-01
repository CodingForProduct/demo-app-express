// libraries that this app needs
var express = require('express');
var path = require('path');

// initialize app
var app = express();

// set the type of template that the app will use
app.set('view engine', 'ejs');
// set the directory for the templates
app.set('views', path.join(__dirname, 'views'));

// display root route
app.get('/', function (request, response) {
  response.render('home');
});

// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
