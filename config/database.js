var environment = require('./environment');
var knexConfig = require('../knexfile');

var db = require('knex')(knexConfig[environment.nodeEnv]);

module.exports = db;
