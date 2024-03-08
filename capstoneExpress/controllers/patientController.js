const asyncHandler = require("express-async-handler");

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
