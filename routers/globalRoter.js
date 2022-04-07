const express = require("express");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("main");
});

router.get("/product", (req, res, next) => {
  res.render("product");
});

router.get("/signin", checkLogin, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("screens/signin", { loggedIn });
});

router.post("/signin", (req, res) => {
  const selectQuery = `
  `;
});
module.exports = router;
