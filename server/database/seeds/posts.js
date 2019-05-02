const postsData = require('../seed_data/posts_data.js')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert(postsData);
    });
};