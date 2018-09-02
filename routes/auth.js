var express = require("express");
var router = express.Router();
const knex = require("../knex");
const { camelizeKeys, decamelizeKeys } = require("humps");

var bcrypt = require("bcrypt");
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
          res.redirect("/home");
        }
      });
  });
});

router.post("/login", (req, res, next) => {
  knex("users").where("users.email", req.body.username).then(function(user) {
    let thisUser = user[0];
    if (!thisUser) {
      res.redirect("www.google.com");
    } else {
      bcrypt.compare(req.body.password, thisUser.hashed_password, function(err, result) {
        if (result == true) {
          res.redirect("/home");
        } else {
          res.send("Incorrect password");
          res.redirect("/");
        }
      });
    }
  });
});

module.exports = router;
