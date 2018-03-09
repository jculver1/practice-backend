'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('shares', (table) => {
    table.increments();
    table.string('text').notNullable().defaultTo('');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shares');
};
