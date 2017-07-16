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
    // pass data to template
    response.render('user', { user: res || {} });
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

    // pass data to template
    response.render('teams', { teams:  res});
  })
  .catch(function(err) {
    // log errors and go to next step
    console.log('Team.findAll err:', err)
    next();
  });
});

router.post('/teams', function (request, response, next) {
  function isValid(formData) {
    if(formData.name.trim() !== '' &&
      formData.name !== undefined) {
        return true;
    } else {
      return false;
    }
  }

  if(isValid(request.body)) {
    new Team({ name: request.body.name }).save()
    .then(function() {
      response.redirect('/teams');
    })
    .catch(function(err) {
      console.log('Team create err:', err)
      next();
    });
  } else {
    response.redirect('/teams/new');
  }
});

// display form to create new team
router.get('/teams/new', function (request, response, next) {
  response.render('teamsNew');
});


// display one team
router.get('/teams/:id', function (request, response, next) {
  Team
  .where('id', request.params.id)
  .fetch()
  .then(function(result) {
    response.render('team', { team: result })
  })
  .catch(function(err) {
    console.log('Team err:', err)
    next();
  });
});


// delete one team
router.post('/teams/:id/delete', function (request, response, next) {
  // destroy one team
  Team
  .where('id', request.params.id)
  .destroy()
  .then(function() {
    // get all teams
    return Team.fetchAll({withRelated: ['users']})
  })
  .then(function(res) {
    // display all teams
    response.render('teams', { teams:  res});
  })
  .catch(function(err) {
    // log errors and go to next step
    console.log('Team.findAll err:', err)
    next();
  });
});
module.exports = router;
