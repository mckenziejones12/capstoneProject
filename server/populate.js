require("dotenv").config();

// Import data models(schemas)
const User = require("./models/User");
const Patient = require("./models/Patient");
const Note = require("./models/Note");

// Create empty array variables for respective data schemas to be added to
const users = [];
const patients = [];
const notes = [];

// require mongoose to be able to populate data to MongoDB
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

// Create function to connect to mongoDB and create data entities
async function main() {
  console.log("About to connect");
  await mongoose.connect(mongoDB);
  console.log("Should be connecting now...");
  await createUsers();
  await createPatients();
  await createNotes();
  console.log("Closing mongoose");
  mongoose.connection.close();
}

async function userCreate(index, username, password, admin) {
  const userDetail = {
    username: username,
    password: password,
    admin: admin,
  };
  const user = new User(userDetail);
  users[index] = user;
  await user.save();
}

async function patientCreate(
  index,
  firstName,
  lastName,
  streetName,
  city,
  state,
  phoneNumber,
  d_birth
) {
  const patientDetail = {
    firstName: firstName,
    lastName: lastName,
    streetName: streetName,
    city: city,
    state: state,
    phoneNumber: phoneNumber,
    d_birth: d_birth,
  };
  const patient = new Patient(patientDetail);
  patients[index] = patient;
  await patient.save();
}

async function noteCreate(index, timestamp, text, patientId) {
  const noteDetail = {
    timestamp: timestamp,
    text: text,
    patientId: patientId,
  };
  const note = new Note(noteDetail);
  notes[index] = note;
  await note.save();
}

async function createUsers() {
  await Promise.all([
    userCreate(0, "johnsmith", "password1", true),
    userCreate(1, "janedoe", "password2", false),
  ]);
}

async function createPatients() {
  await Promise.all([
    patientCreate(
      0,
      "Miley",
      "Cyrus",
      "123 Music Way",
      "Los Angeles",
      "CA",
      "555-555-5555",
      "11-23-1992"
    ),
    patientCreate(
      1,
      "Shrimp",
      "Jones",
      "22 Milkbone Drive",
      "Golden",
      "CO",
      "123-123-1234",
      "02-22-2021"
    ),
    patientCreate(
      2,
      "Smoke",
      "Show",
      "69 Hottie Street",
      "Austin",
      "TX",
      "333-444-5555",
      "07-12-1997"
    ),
  ]);
}

async function createNotes() {
  await Promise.all([
    noteCreate(
      0,
      new Date("2-12-2024"),
      "first note ever written for Miley",
      patients[0]
    ),
    noteCreate(
      1,
      new Date("2-25-2024"),
      "is this a legit note for Shrimp?",
      patients[1]
    ),
    noteCreate(
      2,
      new Date("3-7-2024"),
      "Smoke Show has a note now too!",
      patients[2]
    ),
  ]);
}
