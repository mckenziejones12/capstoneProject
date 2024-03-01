const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const jwtSecret = process.env.JWT_SECRET_KEY;

const User = require("../models/User");

exports.user_login_post = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  console.log("username:", req.body);

  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not provided",
    });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      // compare given password with hashed password
      bcrypt.compare(password, user.password).then((result) => {
        console.log("result issss.....", result);
        if (result) {
          const maxAge = 2 * 60 * 60;
          const token = jwt.sign({ id: user._id, username }, jwtSecret, {
            expiresIn: maxAge,
          });
          console.log(token);
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
            domain: "http://localhost:3000",
          });
          res.status(201).json({
            message: "Login successful",
            user: user._id,
          });
        } else {
          res.status(400).json({
            message: "Login not successful",
          });
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      error: error.message,
    });
  }
});

exports.user_register_post = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: user_register_post");
});
