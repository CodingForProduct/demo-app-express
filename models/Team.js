var db = require('../config/database');

var teams;

exports.findAll = function () {
  return db.raw('SELECT * from teams')
  .then(function(res){
    teams = res.rows;
    return db.raw('SELECT * from users WHERE team_id IS NOT NULL');
  })
  .then(function(users) {
    return teams.map(function(team) {
      var teamMembers = users.rows.filter(function(user) {
        return user.team_id === team.id;
      });
      return { name: team.name, id: team.id, users: teamMembers }
    })
  })
}
