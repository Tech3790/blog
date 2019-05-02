exports.up = function(knex, Promise) {
    return knex.schema.createTable("posts", function(table) {
      table.increments();
      table.string("post_title");
      table.string("post_body");
      table.bigInteger('user_id').references('id').inTable('users')
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("posts");
  };
  