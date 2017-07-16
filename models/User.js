var bcrypt = require('bcryptjs');
var bookshelf = require('../config/database').bookshelf;
var Team = require('./team');

var User = bookshelf.Model.extend({
  tableName: 'users',
  team: function() {
    return this.belongsTo(Team);
  },
  createUser: function(newUser, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      if(err) { cb(err, null) }
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if(err) { cb(err, null) }

        new User({ email: newUser.email, password: hash, name: newUser.name })
        .save()
        .then(function(res) { cb(null, res) })
        .catch(function(err){ cb(err, null) })
      });
    });
  },
  comparePassword: function(textPassword, hash, cb) {
    bcrypt.compare(textPassword, hash, function(err, isMatch) {
      if(err) { cb(err, null) };
      cb(null, isMatch);
    });
  }
});

module.exports = User;
