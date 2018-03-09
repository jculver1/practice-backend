'use strict';

const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/', (_req, res, next) => {
  console.log("here1")
  knex('shares')
    .orderBy('created_at')
    .then((rows) => {
      const shares = camelizeKeys(rows);
      console.log("here2")
      res.send(shares);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
