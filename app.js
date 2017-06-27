// libraries that this app needs
var express = require('express');
var path = require('path');
var ejs = require('ejs');

// initialize app
var app = express();

// set the type of template that the app will use
app.set('view engine', 'ejs');
// set the directory for the templates
app.set('views', path.join(__dirname, 'views'));

// when users visit root route, execute a function that render the home template.
app.get('/', function (request, response) {
  response.render('home');
});

// array of users
var workshopUsers = [
  { id: 1, name: "Amy Jiang" },
  { id: 2, name: "Bridget Dickens" },
  { id: 3, name: "Carolina Bravo" },
  { id: 4, name: "Christa Timil Keyes-Venson" },
  { id: 5, name: "Cindy Wang" }
];

// display list of users
app.get('/users', function (request, response) {
  // pass data to template
  response.render('users', { users: workshopUsers });
});

// start server on port
app.listen(3000, () => {
  console.log('server started on port 3000');
});
