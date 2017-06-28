
exports.seed = function(knex, Promise) {
  var now = new Date();

  return knex('teams').del()
    .then(function() {
      return knex('users').del();
    })
    .then(function () {
      return knex('teams').insert([
        { name: 'Team One', created_at: now, updated_at: now },
        { name: 'Team Two', created_at: now, updated_at: now },
      ])
    })
    .then(function() {
      return knex('teams').select('id')
    })
    .then(function(teams) {
      return knex('users').insert([
        { name: "Amy Jiang", team_id: teams[0].id, created_at: now, updated_at: now },
        { name: "Bridget Dickens", team_id: teams[1].id, created_at: now, updated_at: now },
        { name: "Carolina Bravo", team_id: teams[1].id, created_at: now, updated_at: now },
        { name: "Christa Timil Keyes-Venson", team_id: teams[0].id, created_at: now, updated_at: now },
        { name: "Cindy Wang" , team_id: teams[1].id, created_at: now, updated_at: now }
      ])
    });
};
