var bookshelf = require('../config/database');
var Team = require('./team');
var Language = require('./language');
var GithubProfile = require('./github_profile');

var User = bookshelf.Model.extend({
  tableName: 'users',
  team: function() {
    return this.belongsTo(Team);
  },
  languages: function() {
    return this.hasMany(Language);
  },
  github_profile: function() {
    return this.belongsTo(GithubProfile);
  },
});

module.exports = User;
