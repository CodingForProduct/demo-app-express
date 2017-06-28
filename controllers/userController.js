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

exports.getUser = function (request, response) {
  // get the id listed in the url
  var id = request.params.id;
  // find the user with a given idea
  var targetUser = User.findOne(Number(id));

  // pass data to template
  response.render('user', { user: targetUser });
}
