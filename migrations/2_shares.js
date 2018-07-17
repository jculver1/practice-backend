'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('shares', (table) => {
    table.increments();
    table.string('text').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shares');
};
