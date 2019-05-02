exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", function(table) {
      table.increments();
      table.bigInteger('user_id').references('id').inTable('users')
      table.bigInteger('post_id').references('id').inTable('posts')
      table.string("comment_body");
      table.string("comment_date");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("comments");
  };
  