import Student from "../models/Student.js";
import bcryptjs from "bcryptjs";

const salt = bcryptjs.genSaltSync(10);

export const Register = async (req, res) => {
  const { name, lastName, email, password, course, profilePicture } = req.body;
  console.log(req.body);

  // Check for missing required fields
  if (!name || !lastName || !email || !password || !course) {
    return res.status(422).json({ message: "All required fields must be filled." });
  }

  try {
    // Check if the user already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new student
    const newStudent = new Student({
      name,
      lastName,
      email,
      password:hashedPassword,
      course,
      profilePicture // Use provided profilePicture or default to an empty string
    });

    // Save the student to the database
    await newStudent.save();

    res.status(201).json({ message: "Registration successful.", student: newStudent });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Something went wrong.", error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password)
  if (!email && !password) {
    res.status(422).json({ message: "fileds cannot be empty" });
  }
  let user;
  try {
    user = await Student.findOne({ email });
    // console.log(user.password+" "+ user);
  } catch (err) {
    console.log(err);
  }
  // console.log(email+" "+password+" "+user.password);
  // console.log(user);
  
  
  const comparePass = bcryptjs.compareSync(password, user.password);
  const success=false;
  if (!comparePass) {
    res.status(400).json({ success,message: "invalid password" });
  } else {
    res
      .status(200)
      .json({ success: "true", message: "login successfull", user });
  }
};
export const getUserByEmail = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const user = await Student.find({ email }); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
    console.log(user);
    
  } catch (err) {
    res.status(500).json({ message: "Something went wrong.", error: err.message });
  }
};