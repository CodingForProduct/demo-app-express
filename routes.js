var express = require('express');
var router = express.Router();
var Team = require('./models/Team');
var User = require('./models/User');

// display root route
router.get('/', function (request, response) {
  response.render('home');
});

// display list of users
router.get('/users', function (request, response) {
  // pass data to template
  response.render('users', { users: User.findAll() });
});

// display one user
router.get('/users/:id', function (request, response) {
  // get the id listed in the url
  var id = request.params.id;

  var targetUser = User.findOne(Number(id));

  // pass data to template
  response.render('user', { user: targetUser });
});

// display list of teams
router.get('/teams', function (request, response) {

  // pass data to template
  response.render('teams', { teams: Team.findAll() });
});

module.exports = router;
