var User = require('./User');
var data = require('../data/workshop_data');

// array of teams
var workshopTeams = data.teams;

exports.findAll = function () {
  return workshopTeams.map(function(team) {
    var users = User.findAll();
    var teamMembers =  users.filter(function(user) {
      return user.team_id === team.id;
    });

    return { name: team.name, id: team.id, users: teamMembers };
  });
}
