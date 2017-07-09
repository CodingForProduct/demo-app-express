var bookshelf = require('../config/database');

var GithubProfile = bookshelf.Model.extend({
  tableName: 'github_profiles',
});

module.exports = GithubProfile;
