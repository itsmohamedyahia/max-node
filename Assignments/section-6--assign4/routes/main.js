const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("something");
  res.render("main");
});

inputs = [];

router.post("/", (req, res, next) => {
  inputs.push(req.body);
  console.log(inputs);
  res.redirect("/users");
});

router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "something", users: inputs });
});

module.exports = router;
