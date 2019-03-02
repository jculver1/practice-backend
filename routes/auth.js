const express = require("express");
const router = express.Router();
const knex = require("../knex");
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
      }).catch(function(error) {
        res.send(400);
      })
  });
});

router.post("/login", (req, res, next) => {
  knex("users").where("users.email", req.body.username).then(function(user) {
    const thisUser = user[0];
    if (thisUser) {
      bcrypt.compare(req.body.password, thisUser.hashed_password, function(err, result) {
        if (result == true) {
          var token = jwt.sign({ user: thisUser }, 'shhhhh');          
          console.log("token", token)
          res.send({"jwt": token});
        } else {
          res.send(400);
        }
      });
    } else {
      res.send(400);
    }
  }).catch(function(error) {
    res.send(400);
  })
});

module.exports = router;
