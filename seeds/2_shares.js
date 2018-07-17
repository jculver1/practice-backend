
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('shares').insert([
        {id: 1, text: 'hey'},
        {id: 2, text: 'hi'},
        {id: 3, text: 'bye'}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('shares_id_seq', (SELECT MAX(id) FROM shares));"
      );
    });
};
