const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    gradeLevel: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    parent1_name: {
      type: String,
      required: true,
    },
    parent1_phone: {
      type: Number,
      required: true,
    },
    parent2_name: {
      type: String,
    },
    parent2_phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
