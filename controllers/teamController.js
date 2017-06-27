// array of users
var workshopUsers = [
  { id: 1, name: "Amy Jiang", team_id: 1 },
  { id: 2, name: "Bridget Dickens", team_id: 2 },
  { id: 3, name: "Carolina Bravo", team_id: 2 },
  { id: 4, name: "Christa Timil Keyes-Venson", team_id: 1 },
  { id: 5, name: "Cindy Wang" , team_id: 2}
];

// array of teams
var workshopTeams = [
  { id: 1, name: "Team One" },
  { id: 2, name: "Team Two" },
]

exports.getTeams = function (request, response) {
  var teamsWithUsers = workshopTeams.map(function(team) {
    var teamMembers =  workshopUsers.filter(function(user) {
      return user.team_id === team.id;
    });

    return { name: team.name, id: team.id, users: teamMembers };
  })

  // pass data to template
  response.render('teams', { teams: teamsWithUsers });
}
