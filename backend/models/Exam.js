import mongoose from "mongoose";


const ExamSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    teacher: { type: String, required: true },  // Teacher name or ID
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }], // References Question model
    duration: { type: Number, required: true }, // Duration in minutes
    totalMarks: { type: Number, required: true },
    gradingScheme: { type: String } // Example: A, B, C or Percentage
});

// Creating Exam model
const Exam = mongoose.model("Exam", ExamSchema);

module.exports = Exam;
