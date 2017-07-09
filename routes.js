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
  User.fetchAll()
  .then(function(res) {
    // pass data to template
    response.render('users', { users: res.models });
  })
  .catch(function(err) {
    // log errors and go to next step
    console.log('User.findAll err:', err)
    next();
  });
});

// display one user
router.get('/users/:id', function (request, response, next) {
  // get the id listed in the url
  var id = request.params.id;

  // find the user with a given id
  User.where('id', id).fetch()
  .then(function(res) {
    console.log(res)
    // pass data to template
    response.render('user', { user: res || {}, languages: res.related('languages') });
  })
  .catch(function(err) {
    // log errors and go to next step
    console.log('User.findOne err:', err)
    next();
  });
});

// display list of teams
router.get('/teams', function (request, response, next) {
  Team.fetchAll({withRelated: ['users']})
  .then(function(res) {

    console.log(res)

    // pass data to template
    response.render('teams', { teams:  res});
  })
  .catch(function(err) {
    // log errors and go to next step
    console.log('Team.findAll err:', err)
    next();
  });

});

module.exports = router;
