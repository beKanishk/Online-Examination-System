// import bcrypt from "bcryptjs";

// import Teacher from "../models/Teacher.js";

// const salt = bcrypt.genSaltSync(10);
// export const register = async (req, res) => {
//   const { name, email, password, department, coursesTaught, profilePicture } =
//     req.body;

//   try {
//     const existingTeacher = await Teacher.findOne({ email });
//     if (existingTeacher)
//       return res.status(400).json({ message: "Teacher already exists" });

//     const hashedpass = bcrypt.hashSync(password, salt);
//     const newTeacher = new Teacher({
//       name,
//       email,
//       password: hashedpass,
//       department,
//       profilePicture,
//       coursesTaught,
//       role: "Teacher",
//     });
//     await newTeacher.save();
//     res
//       .status(201)
//       .json({ message: "Teacher registered successfully", newTeacher });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email && !password) {
//     res.status(422).json({ message: "fileds cannot be empty" });
//   }
//   let teacher;
//   try {
//     teacher = await Teacher.findOne({ email });
//     if (!teacher) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   const comparePass = bcrypt.compareSync(password, teacher.password);
//   const success = false;
//   if (!comparePass) {
//     res.status(400).json({ success, message: "invalid password" });
//   } else {
//     res
//       .status(200)
//       .json({ success: "true", message: "login successfull", teacher });
//   }
// };


import bcrypt from "bcryptjs";
import Teacher from "../models/Teacher.js";
import Exam from "../models/Exam.js";
import Student from "../models/Student.js";

const salt = bcrypt.genSaltSync(10);
const activeStudents = {}; // Store active student sessions

// Register Teacher
export const register = async (req, res) => {
  const { name, email, password, department, coursesTaught, profilePicture } = req.body;

  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) return res.status(400).json({ message: "Teacher already exists" });

    const hashedpass = bcrypt.hashSync(password, salt);
    const newTeacher = new Teacher({
      name,
      email,
      password: hashedpass,
      department,
      profilePicture,
      coursesTaught,
      role: "Teacher",
    });

    await newTeacher.save();
    res.status(201).json({ message: "Teacher registered successfully", newTeacher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login Teacher
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ message: "Fields cannot be empty" });
  }

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) return res.status(400).json({ message: "Invalid credentials" });

    const comparePass = bcrypt.compareSync(password, teacher.password);
    if (!comparePass) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      res.status(200).json({ success: true, message: "Login successful", teacher });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Start Exam for a Student
export const startExam = async (req, res) => {
  const { studentId, examId } = req.body;

  try {
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    activeStudents[studentId] = { examId, status: "active" };
    res.status(200).json({ message: "Exam started for student.", studentId, examId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get List of Active Students
export const getActiveStudents = (req, res) => {
  res.status(200).json(activeStudents);
};

// Block a Student for Cheating
export const blockStudent = (req, res) => {
  const { studentId } = req.body;
  if (activeStudents[studentId]) {
    activeStudents[studentId].status = "blocked";
    res.status(200).json({ message: `Student ${studentId} has been blocked.` });
  } else {
    res.status(404).json({ message: "Student not found." });
  }
};
