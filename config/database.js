var environment = require('./environment');
var knexConfig = require('../knexfile');

var knex = require('knex')(knexConfig[environment.nodeEnv]);
var bookshelf = require('bookshelf')(knex);
module.exports =  bookshelf;
