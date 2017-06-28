var User = require('../models/User');

exports.getUsers = function (request, response, next) {
  User.findAll()
  .then(function(res) {
    // pass data to template
    response.render('users', { users: res });
  })
  .catch(function(err) {
    console.log('getUsers err:', err)
    next();
  });
}

exports.getUser = function (request, response, next) {
  // get the id listed in the url
  var id = Number(request.params.id);

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
}

exports.newUser = function(request, response) {
  response.render('userNew');
}
