const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController");
const userController = require("../controllers/userController");

// Homepage/login form
router.post("/", userController.user_login_post);

// POST register for new account form
router.post("/register", userController.user_register_post);

// GET display patient list (include notes for individual patients as well)
router.get("/patients", patientController.patient_list_get);

// GET display single patient profile
router.get("/patients/:patientid", patientController.single_patient_get);

// POST create new patient
router.post("/patients", patientController.patient_create_post);

// PATCH update patient
router.patch("/patients/:patientid", patientController.patient_update);

// DELETE delete patient
router.delete("/patients/:patientid", patientController.patient_delete);

// POST create note for single patient
router.post("/patients/:patientid/note", patientController.note_create_post);

// PATCH update note
router.patch(
  "/patients/:patientid/update/:noteid",
  patientController.note_update
);

// DELETE note
router.delete(
  "/patients/:patientid/delete/:noteid",
  patientController.note_delete
);

module.exports = router;
