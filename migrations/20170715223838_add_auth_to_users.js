
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.string('email');
    table.string('password');
    table.unique('email')

  })
};

exports.down = function(knex, Promise) {
   return knex.schema.table('users', function(table){
    table.dropColumn('email');
    table.dropColumn('password');
    table.dropUnique('email')
  })
};
