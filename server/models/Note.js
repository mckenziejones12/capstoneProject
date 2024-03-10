const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  timestamp: { type: Date },
  text: { type: String },
  patientId: { type: Schema.Types.ObjectId, ref: "Patient" },
});

module.exports = mongoose.model("Note", NoteSchema);
