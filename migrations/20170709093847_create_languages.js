exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', function (table) {
    table.increments();
    table.string('name');

    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('languages');
};
