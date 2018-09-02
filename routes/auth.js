const express = require("express");
const router = express.Router();
const knex = require("../knex");
const { camelizeKeys, decamelizeKeys } = require("humps");
const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/create", (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    knex("users")
      .insert({
        email: req.body.username,
        hashed_password: hash
      })
      .then(function(data) {
        if (data) {
          var token = jwt.sign({ user: data }, 'shhhhh');
          res.send({"jwt": token});
        }
      });
  });
});

router.post("/login", (req, res, next) => {
  knex("users").where("users.email", req.body.username).then(function(user) {
    const thisUser = user[0];
    if (!thisUser) {
      res.redirect("www.google.com");
    } else {
      bcrypt.compare(req.body.password, thisUser.hashed_password, function(err, result) {
        if (result == true) {
          var token = jwt.sign({ user: thisUser }, 'shhhhh');          
          res.send({"jwt": token});
        } else {
          res.send("Incorrect password");
          res.redirect("/");
        }
      });
    }
  });
});

module.exports = router;
