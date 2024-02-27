const asyncHandler = require("express-async-handler");

const Patient = require("../models/Patient");
const User = require("../models/User");
const Note = require("../models/Note");

// (include notes for individual patients as well)
exports.patient_list_get = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: patient_list_get");
});

exports.single_patient_get = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: single_patient_get");
});

exports.patient_create_post = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: patient_create_post");
});

exports.patient_update = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: patient_update");
});

exports.patient_delete = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: patient_delete");
});

exports.note_create_post = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: note_create_post");
});

exports.note_update = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: note_update");
});

exports.note_delete = asyncHandler(async (req, res, next) => {
  console.log("Not Implemented: note_delete");
});
