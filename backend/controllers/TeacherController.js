import bcrypt from "bcryptjs";

import Teacher from "../models/Teacher";

const salt = bcryptjs.genSaltSync(10);
export const registerTeacher = async (req, res) => {
  const { name, email, password, department, coursesTaught, profilePicture } =
    req.body;

  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher)
      return res.status(400).json({ message: "Teacher already exists" });

    const hashedpass = bcrypt.hashSync(password, salt);
    const newTeacher =  new Teacher({
      name,
      email,
      password: hashedpass,
      department,
      profilePicture,
      coursesTaught,
      role: "Teacher",
    });
    await newTeacher.save();
    res.status(201).json({ message: "Teacher registered successfully" ,newTeacher});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
