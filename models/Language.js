var bookshelf = require('../config/database');

var Language = bookshelf.Model.extend({
  tableName: 'languages',
});

module.exports = Language;
