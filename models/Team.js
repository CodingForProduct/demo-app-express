var db = require('../config/database');

var teams;

exports.findAll = function () {
  return db.select().from('teams')
  .then(function(res){
    teams = res;
    return db.select().from('users').whereNotNull('team_id')
  })
  .then(function(users) {
    return teams.map(function(team) {
      var teamMembers = users.filter(function(user) {
        return user.team_id === team.id;
      });
      return { name: team.name, id: team.id, users: teamMembers }
    })
  })
}
