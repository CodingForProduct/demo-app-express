var bookshelf = require('../config/database');
var Team = require('./team');

var User = bookshelf.Model.extend({
  tableName: 'users',
  team: function() {
    return this.belongsTo(Team);
  },
});

module.exports = User;
