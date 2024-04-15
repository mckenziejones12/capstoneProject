const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_KEY;
const asyncHandler = require("express-async-handler");

exports.adminAuth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("this is the admin authorization");
  console.log("token: ", token);
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).send("Not authorized");
      } else {
        if (decodedToken.admin !== true) {
          return res.status(401).send("Not authorized");
        } else {
          next();
        }
      }
    });
  } else {
    return res.status(401).send("Not authorized, token not available");
  }
});

exports.userAuth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("user token: ", token);
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      next();
    });
  } else {
    return res.status(401).send("Not authorized, token not available");
  }
});
