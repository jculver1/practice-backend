const express = require("express");
const router = express.Router();
const knex = require("../knex");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    let token = req.headers.authorization.split(' ')[1];
    try {
      var decoded = jwt.verify(token, 'shhhhh');
      res.send({message: decoded})
    } catch(err) {
      res.send(400)
    }
  }
  res.send(400)
});

module.exports = router;
