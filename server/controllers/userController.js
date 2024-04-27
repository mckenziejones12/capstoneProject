const asyncHandler = require("express-async-handler");
const { hash } = require("bcryptjs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const jwtSecret = process.env.JWT_SECRET_KEY;

const User = require("../models/User");

exports.user_login_post = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

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
        if (result) {
          const maxAge = 2 * 60 * 60; // 2 hours in seconds
          const token = jwt.sign(
            { id: user._id, username, admin: user.admin },
            jwtSecret,
            {
              expiresIn: maxAge,
            }
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 2 hours in milliseconds
          });
          res.status(201).json({
            message: "Login successful",
            user: user._id,
            token: token,
          });
        } else {
          res.status(400).json({
            message: "Login not successful: Wrong password",
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
  try {
    const { username, password, admin } = req.body;

    const user = await User.findOne({ username: username });
    if (user) {
      // if user exists, return error
      return res.status(500).json({
        message: "User already exists. Try logging in!",
      });
    }
    const passwordHash = await hash(password, 10);
    const newUser = new User({
      username: username,
      password: passwordHash,
      admin: admin,
    });
    newUser.save();
    res.status(200).json({
      message: "Your new account was created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
});
