var User = require('./User');

// array of teams
var workshopTeams = [
  { id: 1, name: "Team One" },
  { id: 2, name: "Team Two" },
]

exports.findAll = function () {
  return workshopTeams.map(function(team) {
    var users = User.findAll();
    var teamMembers =  users.filter(function(user) {
      return user.team_id === team.id;
    });

    return { name: team.name, id: team.id, users: teamMembers };
  });
}
