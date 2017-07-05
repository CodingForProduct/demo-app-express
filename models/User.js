var bookshelf = require('../config/database').bookshelf;
var Team = require('./team');

var User = bookshelf.Model.extend({
  tableName: 'users',
  team: function() {
    return this.belongsTo(Team);
  },
});

module.exports = User;
