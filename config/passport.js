module.exports = function(passport) {
  // serializeUser and deserializeUser is for  login sessions
  passport.serializeUser(function(userId, done) {
    done(null, userId);
  });

  passport.deserializeUser(function(userId, done) {
    done(null, userId);
  });
}
