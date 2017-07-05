var bookshelf = require('../config/database').bookshelf;
var User = require('./user');


var Team = bookshelf.Model.extend({
  tableName: 'teams',
  users: function() {
    return this.hasMany(User);
  },
  findAll: function() {}
});

module.exports = Team;
