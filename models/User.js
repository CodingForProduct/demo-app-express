var data = require('../data/workshop_data');

// array of teams
var workshopUsers = data.users;

exports.findAll = function () {
  return workshopUsers;
}

exports.findOne = function (id) {
  return workshopUsers.filter(function(user){
    return user.id === id;
  })[0];
}
