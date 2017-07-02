var User = require('./User');
var data = require('../data/workshop_data');

// array of teams
var workshopTeams = data.teams;

exports.findAll = function () {
  function get_team_members(team) {
    var teamMembers =  User.findAll().filter(function(user) {
      return user.team_id === team.id;
    });

    return { name: team.name, id: team.id, users: teamMembers };
  }

  var teamsWithUsers = workshopTeams.map(get_team_members);
  return teamsWithUsers;
}
