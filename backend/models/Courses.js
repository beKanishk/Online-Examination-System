import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "MCA"
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  exams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
});
const Course = mongoose.model("Course", courseSchema);
export default Course;
