const mongoose = require("mongoose");

const studentResultSchema = new mongoose.Schema({
  math: { type: String, required: true },
  phy: { type: String, required: true },
  chem: { type: String, required: true },
  comp: { type: String, required: true },
  eng: { type: String, required: true },
});

const StudentResult = mongoose.model("studentResult", studentResultSchema);
module.exports = StudentResult;
