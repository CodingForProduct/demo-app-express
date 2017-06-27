var User = require('../models/User');

exports.getUsers = function (request, response) {
  // pass data to template
  response.render('users', { users: User.findAll() });
}

exports.getUser = function (request, response) {
  // get the id listed in the url
  var id = request.params.id;
  // find the user with a given idea
  var targetUser = User.findOne(Number(id));

  // pass data to template
  response.render('user', { user: targetUser });
}
