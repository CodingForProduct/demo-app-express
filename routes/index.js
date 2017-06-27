var express = require('express');
var router = express.Router();

// display root route
router.get('/', function (request, response) {
  response.render('home');
});

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

// display list of users
router.get('/users', function (request, response) {
  // pass data to template
  response.render('users', { users: workshopUsers });
});

// display one user
router.get('/users/:id', function (request, response) {
  // get the id listed in the url
  var id = request.params.id;

  // find the user with a given idea
  var targetUser = workshopUsers.filter(function(user){
    // convert string params into a number
    return user.id === Number(id);
  });

  // pass data to template
  response.render('user', { user: targetUser[0] });
});

// display list of teams
router.get('/teams', function (request, response) {
  var teamsWithUsers = workshopTeams.map(function(team) {
    var teamMembers =  workshopUsers.filter(function(user) {
      return user.team_id === team.id;
    });

    return { name: team.name, id: team.id, users: teamMembers };
  })

  // pass data to template
  response.render('teams', { teams: teamsWithUsers });
});

module.exports = router;
