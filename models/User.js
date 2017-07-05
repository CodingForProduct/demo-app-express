var db = require('../config/database');

exports.findAll = function () {
  return db.select().from('users').orderBy('name');
}

exports.findOne = function (id) {
  return db.first().from('users').where('id', id);
}
