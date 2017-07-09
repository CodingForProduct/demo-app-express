exports.seed = function(knex, Promise) {
  var now = new Date();
  var savedTeams, savedUsers, savedLanguages;

  return knex('teams').del()
    .then(function() {
      return knex('languages_users').del();
    })
    .then(function() {
      return knex('github_profiles').del();
    })
    .then(function() {
      return knex('users').del();
    })
     .then(function() {
      return knex('languages').del();
    })

    .then(function () {
      return knex('teams').insert([
        { name: 'Team One', created_at: now, updated_at: now },
        { name: 'Team Two', created_at: now, updated_at: now },
      ])
    })
    .then(function(){
      return knex('teams');
    })
    .then(function(teams) {
      savedTeams = teams;
    })
    .then(function(){
      return knex('users').insert([
        { name: "Bridget", team_id: savedTeams[0].id, created_at: now, updated_at: now },
        { name: "Carolina", team_id: savedTeams[1].id, created_at: now, updated_at: now },
        { name: "Christa", team_id: savedTeams[1].id, created_at: now, updated_at: now },
        { name: "Cindy", team_id: savedTeams[0].id, created_at: now, updated_at: now },
        { name: "Elise" , team_id: savedTeams[1].id, created_at: now, updated_at: now }
      ])
    })
    .then(function() {
      return knex('languages').insert([
        { name: 'JavaScript', created_at: now, updated_at: now },
        { name: 'Python', created_at: now, updated_at: now },
      ])
    })
    .then(function(){
      return knex('users');
    })
    .then(function(users){
      savedUsers = users;
    })
    .then(function(){
      return knex('languages');
    })
    .then(function(languages){
      savedLanguages = languages;
    })
    .then(function() {
      return knex('languages_users').insert([
        { user_id: savedUsers[0].id, language_id: savedLanguages[0].id, created_at: now, updated_at: now },
        { user_id: savedUsers[0].id, language_id: savedLanguages[1].id, created_at: now, updated_at: now },
        { user_id: savedUsers[1].id, language_id: savedLanguages[0].id, created_at: now, updated_at: now },
        { user_id: savedUsers[2].id, language_id: savedLanguages[0].id, created_at: now, updated_at: now },
        { user_id: savedUsers[3].id, language_id: savedLanguages[1].id, created_at: now, updated_at: now },
        { user_id: savedUsers[3].id, language_id: savedLanguages[0].id, created_at: now, updated_at: now },
        { user_id: savedUsers[3].id, language_id: savedLanguages[1].id, created_at: now, updated_at: now },
      ])
    })
    .then(function(){
      return knex('github_profiles').insert([
        { user_id: savedUsers[0].id, repo_count: 3, star_count: 1, created_at: now, updated_at: now },
        { user_id: savedUsers[1].id, repo_count: 2, star_count: 0, created_at: now, updated_at: now },
        { user_id: savedUsers[2].id, repo_count: 0, star_count: 2, created_at: now, updated_at: now },
        { user_id: savedUsers[3].id, repo_count: 1, star_count: 3, created_at: now, updated_at: now },
        { user_id: savedUsers[4].id, repo_count: 2, star_count: 1, created_at: now, updated_at: now },
      ])
    })
};
