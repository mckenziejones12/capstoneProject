const asyncHandler = require("express-async-handler");

const User = require("../models/User");

exports.user_login_post = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: user_login_post");
  // If new account created successfully, redirect to ("/patients/allpatients")
});

exports.user_register_post = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: user_register_post");
  // If new account created successfully, redirect to ("/patients/allpatients")
});
