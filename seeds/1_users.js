
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'first1', last_name: 'last1', email: 'first1.last1@gmail.com', hashed_password: 'fake'},
        {id: 2, first_name: 'first2', last_name: 'last2', email: 'first2.last2@gmail.com', hashed_password: 'fake'},
        {id: 3, first_name: 'first3', last_name: 'last3', email: 'first3.last3@gmail.com', hashed_password: 'fake'}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
