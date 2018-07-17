exports.up = function(knex) {
    return knex.schema.createTable('users_shares', (table) => {
      table.increments();
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index();
      table.integer('share_id')
        .notNullable()
        .references('id')
        .inTable('shares')
        .onDelete('CASCADE')
        .index();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users_shares');
  };
  