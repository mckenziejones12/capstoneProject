const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const Patient = require("../models/Patient");
const User = require("../models/User");
const Note = require("../models/Note");

// (include notes for individual patients as well)
exports.patient_list_get = asyncHandler(async (req, res, next) => {
  let allPatients = [];
  let allNotes = [];

  try {
    allPatients = await Patient.find().sort({ lastName: 1 });
    console.log(allPatients);
    allNotes = await Note.find();
    console.log(allNotes);
    return res.status(200).json({
      message: "Patients listed successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
      error: error.message,
    });
  }
});

exports.single_patient_get = asyncHandler(async (req, res, next) => {
  try {
    // Get details of Patient and all associated notes (in parallel)
    const [patient, notesForPatient] = await Promise.all([
      Patient.findById(req.params.patientid).exec(),
      Note.find({ patientId: req.params.patientid }, "text").exec(),
    ]);
    console.log("req.params.patientid: ", req.params.patientid);
    console.log("patient: ", patient),
      console.log("notes for patient: ", notesForPatient);
    if (patient === null) {
      res.status(404).json({
        message: "Patient not found.",
      });
    }
    res.status(200).json({
      message: "Patient profile listed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occured",
      error: error.message,
    });
  }
});

exports.patient_create_post = [
  // Validate and sanitize form fields.
  body("firstName", "First name is required.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("lastName", "Last name is required.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("streetName", "Street name is required.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("city", "City is required.").trim().isLength({ min: 1 }).escape(),
  body("state", "State is required.").trim().isLength({ min: 2 }).escape(),
  body(
    "phoneNumber",
    "A 10 digit phone number is required. Please write in the form of XXX-XXX-XXXX"
  )
    .trim()
    .isLength({ min: 12 })
    .escape(),
  body(
    "d_birth",
    "Date of birth is required. Please write in the form of MM-DD-YYYY."
  )
    .trim()
    .isLength({ min: 10 })
    .escape(),

  // Process request after validation and sanitization
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    console.log("any errors: ", errors);
    // Create new patient with escaped/trimmed data and new ID
    const patient = new Patient({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      streetName: req.body.streetName,
      city: req.body.city,
      state: req.body.state,
      phoneNumber: req.body.phoneNumber,
      d_birth: req.body.d_birth,
      _id: req.params.patientid,
    });
    // If create new patient form not completed correctly, throw error.
    if (!errors.isEmpty()) {
      res.status(400).json({
        error: res.status(400).json({ errors: errors.array() }),
      });
    } else {
      // Form data valid. Save new patient.
      await patient.save();
      res.status(200).json({
        message: "New patient created successfully.",
      });
    }
  }),
];

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
