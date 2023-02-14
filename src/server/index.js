const express = require("express");
const { json } = require("body-parser");
const db = require("./db");
const Student = "./db/models/Student.js";

const app = express();
const cors = require("cors");
const jsonParser = json();
const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
  console.log("first route");
});

app.post("/students", jsonParser, async (req, res) => {
  // get req.body
  // db call => db.collection('students').insertOne(new Student( req.body contents))
  // return a success object
  try {
    const { studentInfo } = req.body;

    const newStudent = await db
      .collection("students")
      .insertOne(new Student(studentInfo));

    res.json({
      msg: newStudent,
      newStudent: studentInfo,
    });
  } catch (x) {
    console.error(x);
    res.json({ error: x });
  }
});

app.post("/", jsonParser, (req, res) => {
  console.log("first post route");
});

app.listen(PORT, () => {
  console.log("server live!");
});

module.exports = app;
