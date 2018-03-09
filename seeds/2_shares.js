
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('shares').insert([
        {id: 1, text: 'hey', user_id: 1},
        {id: 2, text: 'hi', user_id: 2},
        {id: 3, text: 'bye', user_id: 1}
      ]);
    });
};
