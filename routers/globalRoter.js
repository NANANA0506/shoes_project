const express = require("express");
const res = require("express/lib/response");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;

  console.log(req.session);
  res.render("main", { loggedIn });
});

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.get("/product", (req, res, next) => {
  res.render("product");
});

router.get("/signin", checkLogin, (req, res, next) => {
  const loggedIn = req.session.isLoggedIn;
  res.render("signin", { loggedIn });
});

router.post("/signin", (req, res) => {
  const selectQuery = `
    SELECT  id,
            name,
            email,
            password,
            birth,
            phone_number
      FROM  users
     WHERE  email = "${req.body.signinEmail}"
       AND  password = "${req.body.signinPassword}"
  `;
  try {
    db.query(selectQuery, (error, rows) => {
      if (error) {
        console.error(error);
        return res.redirect("/signin");
      }

      if (rows.length === 0) {
        return res.redirect("/signin");
      }
      req.session.isLoggedIn = true;
      req.session.userId = rows[0].id;
      return res.redirect("/");
    });
  } catch (error) {
    console.log(error);
    return res.redirect("/signin");
  }
});

router.get("/signup");
module.exports = router;
