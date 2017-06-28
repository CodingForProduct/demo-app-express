var Team = require('../models/Team');

exports.getTeams = function (request, response) {
  Team.findAll()
  .then(function(res) {
    // pass data to template
    response.render('teams', { teams: res });
  })
}
