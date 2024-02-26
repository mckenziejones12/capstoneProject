const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetName: { type: String, required: true },
  city: { type: String, required: true },
  state: {
    enum: [
      "AL",
      "AK",
      "AZ",
      "AR",
      "AS",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "MP",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WI",
      "WY",
    ],
  },
  phoneNumber: { type: String, required: true },
  DOB: { type: String, required: true },
});

module.exports = mongoose.model("Patient", PatientSchema);
