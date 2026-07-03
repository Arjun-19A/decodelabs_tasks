const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { name, email, age, course } = req.body;

    if (!name || !email || !age || !course) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student with this email already exists",
      });
    }

    const student = await Student.create({
      name,
      email,
      age,
      course,
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create student",
      error: error.message,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
      error: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch student",
      error: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, age, course } = req.body;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    if (email && email !== student.email) {
      const emailExists = await Student.findOne({ email });

      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: "Email already in use",
        });
      }
    }

    student.name = name || student.name;
    student.email = email || student.email;
    student.age = age || student.age;
    student.course = course || student.course;

    const updatedStudent = await student.save();

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update student",
      error: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await Student.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete student",
      error: error.message,
    });
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
