var bookshelf = require('../config/database');
var User = require('./user');


var Team = bookshelf.Model.extend({
  tableName: 'teams',
  users: function() {
    return this.hasMany(User);
  },
  findAll: function() {}
});

module.exports = Team;
