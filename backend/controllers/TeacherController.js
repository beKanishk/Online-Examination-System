import bcrypt from "bcryptjs";

import Teacher from "../models/Teacher.js";

const salt = bcrypt.genSaltSync(10);
export const register = async (req, res) => {
  const { name, email, password, department, coursesTaught, profilePicture } =
    req.body;

  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher)
      return res.status(400).json({ message: "Teacher already exists" });

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
    res
      .status(201)
      .json({ message: "Teacher registered successfully", newTeacher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(422).json({ message: "fileds cannot be empty" });
  }
  let teacher;
  try {
    teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
  const comparePass = bcrypt.compareSync(password, teacher.password);
  const success = false;
  if (!comparePass) {
    res.status(400).json({ success, message: "invalid password" });
  } else {
    res
      .status(200)
      .json({ success: "true", message: "login successfull", teacher });
  }
};
