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

async function userCreate(index, username, password, role) {
  const userDetail = {
    username: username,
    password: password,
    role: role,
  };
  const user = new User(userDetail);
  users[index] = user;
  await user.save();
  console.log(`Added user: ${username}`);
}

async function patientCreate(
  index,
  firstName,
  lastName,
  streetName,
  city,
  state,
  phoneNumber,
  DOB
) {
  const patientDetail = {
    firstName: firstName,
    lastName: lastName,
    streetName: streetName,
    city: city,
    state: state,
    phoneNumber: phoneNumber,
    DOB: DOB,
  };
  const patient = new Patient(patientDetail);
  patients[index] = patient;
  await patient.save();
  console.log(`New patient added: ${(lastName, firstName)}`);
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
  console.log(`New note added: ${text}`);
}

async function createUsers() {
  await Promise.all([
    userCreate(0, "johnsmith", "password1", "Admin"),
    userCreate(1, "janedoe", "password2", "Employee"),
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
      "January 1, 1990"
    ),
    patientCreate(
      1,
      "Shrimp",
      "Jones",
      "22 Milkbone Drive",
      "Golden",
      "CO",
      "123-123-1234",
      "February 22, 2021"
    ),
    patientCreate(
      2,
      "Smoke",
      "Show",
      "69 Hottie Street",
      "Austin",
      "TX",
      "333-444-5555",
      "July 12, 1997"
    ),
  ]);
}

async function createNotes() {
  await Promise.all([
    noteCreate(0, new Date("2/12/2024"), "first note ever written", users[0]),
    noteCreate(1, new Date("2/25/2024"), "is this a legit note?", users[1]),
  ]);
}
