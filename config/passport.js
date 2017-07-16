var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');


module.exports = function(passport) {
  // serializeUser and deserializeUser is for  login sessions
  passport.serializeUser(function(userId, done) {
    done(null, userId);
  });

  passport.deserializeUser(function(userId, done) {
    done(null, userId);
  });

  // Configure the local strategy for use by Passport.
  passport.use(new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password'
  },
  function(email, password, done) {
            console.log('----')

    if (email) { email = email.toLowerCase(); }

    User.where('email', email).fetch()
      .then((user) => {
        console.log('----')
        if (!user) {
          return done(null, false);
        }

        user.comparePassword(password, user.get('password'), function(err, isMatch) {
          if(err) { return done (err, null) }
          if (isMatch) {
            return done(null, user.get('id'))
          } else {
            return done(null, false)
          }
        })

      })
      .catch(err => {
        console.log('err', err)
        return done(err)
      })
  }));
}
