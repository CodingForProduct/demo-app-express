var express = require('express');
var router = express.Router();
var Team = require('./models/Team');
var User = require('./models/User');

// display root route
router.get('/', function (request, response) {
  response.render('home');
});

// display list of users
router.get('/users', function (request, response, next) {
  User.findAll()
  .then(function(res) {
    // pass data to template
    response.render('users', { users: res });
  })
  .catch(function(err) {
    console.log('getUsers err:', err)
    next();
  });
});

// display one user
router.get('/users/:id', function (request, response, next) {
  // get the id listed in the url
  var id = request.params.id;

  // find the user with a given id
  User.findOne(id)
  .then(function(res) {
    // pass data to template
    response.render('user', { user: res || {} });
  })
  .catch(function(err) {
    console.log('getUser err:', err)
    next();
  });
});

// display list of teams
router.get('/teams', function (request, response, next) {
  Team.findAll()
  .then(function(res) {
    // pass data to template
    response.render('teams', { teams: res });
  })
  .catch(function(err) {
    console.log('Team.findAll err:', err)
    next();
  });
});

module.exports = router;
