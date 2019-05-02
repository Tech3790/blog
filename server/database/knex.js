const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js/index.js')[env];
const knex = require('knex')(config);

module.exports = knex;