var express = require('express');
var router = express.Router();
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET shares listing for specific user */
router.get('/:id/shares', (req, res, next) => {
  knex('shares')
      .innerJoin('users', 'users.id', 'shares.user_id')
      .where('shares.user_id', req.params.id)
      .then((rows) => {
        const users_shares = camelizeKeys(rows);
        res.send(users_shares);
      })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;
