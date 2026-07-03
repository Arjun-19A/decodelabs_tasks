const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// Create a new student
router.post("/", createStudent);

// Get all students
router.get("/", getStudents);

// Get a single student by ID
router.get("/:id", getStudentById);

// Update a student
router.put("/:id", updateStudent);

// Delete a student
router.delete("/:id", deleteStudent);

module.exports = router;