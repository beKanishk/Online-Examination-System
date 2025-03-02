import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    }, // SCORE, SCOPE, SAS
    coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // MCA, BCA, etc.
    examsCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
  },
  { timestamps: true }
);
const Teacher = mongoose.model(teacherSchema, "Teacher");
export default Teacher;
