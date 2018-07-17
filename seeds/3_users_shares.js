
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users_shares').del()
    .then(function(){
      return knex('users_shares').insert([
        {id: 1, share_id: '1', user_id: 1},
        {id: 2, share_id: '1', user_id: 2},
      ])
    })
    .then(function(){
      return knex.raw(
        "SELECT setval('users_shares_id_seq', (SELECT MAX(id) FROM users_shares));"
      )     
    })
  };
  