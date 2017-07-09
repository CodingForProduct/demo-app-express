
exports.up = function(knex, Promise) {
  return knex.schema.createTable('github_profiles', function (table) {
    table.integer('repo_count');
    table.integer('star_count');

    table.integer('user_id').unsigned().index();
    table.foreign('user_id').references('users.id')

    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('github_profiles');
};
