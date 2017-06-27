// libraries that this app needs
var express = require('express');
var path = require('path');
var data = require('./data/workshop_data')

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

// array of users
var workshopUsers = data.users;

// array of teams
var workshopTeams = data.teams;

// display list of users
app.get('/users', function (request, response) {

  // pass data to template
  response.render('users', { users: workshopUsers });
});

// display one user
app.get('/users/:id', function (request, response) {
  // get the id listed in the url
  var id = request.params.id;

  // find the user with a given idea
  var targetUser = workshopUsers.filter(function(user){
    // convert string params into a number
    return user.id === Number(id);
  });

  // pass data to template
  response.render('user', { user: targetUser[0] });
});

app.get('/teams', function (request, response) {
  // pass data to template
  response.render('teams', { teams: workshopTeams });
});


// start server on port
app.listen(3000, function() {
  console.log('server started on port 3000');
});
