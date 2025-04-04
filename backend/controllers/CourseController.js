import Course from "../models/Courses.js";
import Department from "../models/Department.js";

export const addCourse = async (req, res) => {
  const { name } = req.body;
  const {department} = req.params;
  if (!name || !department) {
    res.status(422).json({ message: "field cannot be empty" });
    return;
  }
  let course;
  try {
    course = await Course.findOne({ name,department });
    if (course) {
     return  res.status(400).json({ message: "course already exists in this department" });
     
    } else {
      const newCourse = new Course({
        name,
        department
      });
      await newCourse.save();
      await Department.findByIdAndUpdate(
        department,
        { $addToSet: { courses: newCourse._id } }, // Prevent duplicates
        { new: true, runValidators: true } // Ensure update is applied correctly
      );
      res
        .status(200)
        .json({ message: "course created successfully", newCourse });
    }
  } catch (err) {
    res.status(500).json({ message: "error occured", err });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('department');
    // const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving courses', error: err.message });
  }
};