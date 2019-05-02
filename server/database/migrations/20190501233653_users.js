exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
      table.increments();
      table.string("username");
      table.string("profile_picture");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
  };
  