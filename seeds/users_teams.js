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
        { name: "Emily", team_id: teams[0].id, created_at: now, updated_at: now },
        { name: "Madison", team_id: teams[1].id, created_at: now, updated_at: now },
        { name: "Emma", team_id: teams[1].id, created_at: now, updated_at: now },
        { name: "Hannah", team_id: teams[0].id, created_at: now, updated_at: now },
        { name: "Olivia" , team_id: teams[1].id, created_at: now, updated_at: now }
      ])
    });
};
