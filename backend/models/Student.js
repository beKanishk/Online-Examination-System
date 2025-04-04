import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    }, // Reference to the Course schema (MCA, BCA, etc.)
    profilePicture: { type: String, default: "" },
    role: { type: String, default: "student" },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
