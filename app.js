// libraries that this app needs
var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var Team = require('./models/Team');
var User = require('./models/User');

// initialize app
var app = express();

// add layout support
app.use(expressLayouts);
// specifiy location of layout file
app.set('layout', path.join(__dirname, 'views', 'layouts', 'layout'));

// set the type of template that the app will use
app.set('view engine', 'ejs');
// set the directory for the templates
app.set('views', path.join(__dirname, 'views'));

// set the folder for  static assets
app.use(express.static(path.join(__dirname, 'public')));

// display root route
app.get('/', function (request, response) {
  response.render('home');
});

// display list of users
app.get('/users', function (request, response) {

  // pass data to template
  response.render('users', { users: User.findAll() });
});

// display one user
app.get('/users/:id', function (request, response) {
  // get the id listed in the url
  var id = request.params.id;

  var targetUser = User.findOne(Number(id));

  // pass data to template
  response.render('user', { user: targetUser });
});

// display list of teams
app.get('/teams', function (request, response) {

  // pass data to template
  response.render('teams', { teams: Team.findAll() });
});

// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
