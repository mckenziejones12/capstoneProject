const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/users");
});

module.exports = router;

/*If user login is authenticated --> res.redirect("/patients").
  If user login != authenticated --> res.redirect("/users") */
