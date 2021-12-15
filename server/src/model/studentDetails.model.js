const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StudentDetails = mongoose.model("studentDetail", studentDetailsSchema);
module.exports = StudentDetails;
