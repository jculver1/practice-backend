'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/', (req, res, next) => {
  knex('shares')
    .orderBy('created_at')
    .then((rows) => {
      const shares = camelizeKeys(rows);
      res.send(shares);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  console.log("req.body", req.body)
  knex('shares')
    .insert(decamelizeKeys(req.body), '*')
    .then((rows) => {
      const share = camelizeKeys(rows[0]);
      res.send(share);
    })
    .catch((err) => {
      next(err);
    });
  });

module.exports = router;
