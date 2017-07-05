var db = require('../config/database');

exports.findAll = function () {
  return db.raw('SELECT * from users');
}

exports.findOne = function (id) {
  // to minimize the risk of raw sql inject, we use create a parital sql with
  // " = ?", and then pass in the id as a variable
  return db.raw('SELECT * from users where id = ? LIMIT 1', id);
}
