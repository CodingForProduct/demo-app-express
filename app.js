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
  { id: 1, name: "Amy Jiang", team_id: 1 },
  { id: 2, name: "Bridget Dickens", team_id: 2 },
  { id: 3, name: "Carolina Bravo", team_id: 2 },
  { id: 4, name: "Christa Timil Keyes-Venson", team_id: 1 },
  { id: 5, name: "Cindy Wang" , team_id: 2}
];

// array of teams
var workshopTeams = [
  { id: 1, name: "Team One" },
  { id: 2, name: "Team Two" },
]

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
app.listen(3000, () => {
  console.log('server started on port 3000');
});
