// array of users
var workshopUsers = [
  { id: 1, name: "Amy Jiang", team_id: 1 },
  { id: 2, name: "Bridget Dickens", team_id: 2 },
  { id: 3, name: "Carolina Bravo", team_id: 2 },
  { id: 4, name: "Christa Timil Keyes-Venson", team_id: 1 },
  { id: 5, name: "Cindy Wang" , team_id: 2}
];

exports.findAll = function () {
  return workshopUsers;
}

exports.findOne = function (id) {
  return workshopUsers.filter(function(user){
    return user.id === id;
  })[0];
}
