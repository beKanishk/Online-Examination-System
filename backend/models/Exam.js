import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    duration: { type: Number, required: true }, // In minutes
    totalMarks: { type: Number, required: true },
    gradingScheme: { type: String },
    scheduledDate: { type: Date, required: true }, // Exam Date
  },
  {
    timestamps: true,
  }
);

// Creating Exam model
const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;
