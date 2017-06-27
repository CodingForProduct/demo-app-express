var Team = require('../models/Team');

exports.getTeams = function (request, response) {
  // pass data to template
  response.render('teams', { teams: Team.findAll() });
}
