const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("main");
});

router.get("/product", (req, res, next) => {
  res.render("product");
});

module.exports = router;
