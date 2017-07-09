
exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages_users', function (table) {
    table.increments();

    table.integer('user_id').unsigned().index();
    table.foreign('user_id').references('users.id')

    table.integer('language_id').unsigned().index();
    table.foreign('language_id').references('languages.id')

    table.timestamps();
  });
};

exports.down = function(knex, Promise) {

};
