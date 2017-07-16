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

function isTeamValid(formData) {
  if(formData.name.trim() !== '' &&
    formData.name !== undefined) {
      return true;
  } else {
    return false;
  }
}

router.post('/teams', function (request, response, next) {
  if(isTeamValid(request.body)) {
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

// show form to edit one team
router.get('/teams/:id/edit', function (request, response, next) {
  Team
  .where('id', request.params.id)
  .fetch()
  .then(function(result) {
    response.render('teamsEdit', { team: result })
  })
  .catch(function(err) {
    console.log('Team.findAll err:', err)
    next();
  });
});

// update one team
router.post('/teams/:id/update', function (request, response, next) {
  var id = request.params.id;
  console.log('isTeamValid', isTeamValid(request.body))
  if(isTeamValid(request.body)) {
    Team
    .where('id', id)
    .fetch()
    .then(function(user) {
      return user.save({name: request.body.name })
    })
    .then(function(user) {
      response.redirect('/teams');
    })
    .catch(function(err) {
      console.log('Team.findAll err:', err)
      next();
    });
  } else {
    response.redirect('/teams/' + id + '/edit');
  }

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

// show signup form
router.get('/signup', function(request, response, next) {
  response.render('auth/signup', { errors: null });
})


// process signup
router.post('/signup', function(request, response, next) {
  var email = request.body.email.trim();
  var password = request.body.password.trim();
  var password2 = request.body.password2.trim();
  var name = request.body.name.trim();

  function isValid() {
    if (email !== '' &&
      password !== '' &&
      password2 !== '' &&
      name !== '' &&
      password === password2
    ) {
      return true;
    } else {
      return false
    }
  }

  if(isValid()) {
    var user = new User;
    user.createUser({email: email, password: password, name: name}, function(err, user){
     console.log('create', user, err)
     if(err) {
        response.render('auth/signup', {errors: err.detail})
     }
     response.redirect('/login')
    })
  } else  {
    response.render('auth/signup', {errors: 'Something went wrong'})
  }

})

module.exports = router;
