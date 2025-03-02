import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  type: { type: String, required: true }, // MCQ, True/False, Descriptive
  questionText: { type: String, required: true },
  options: [{ type: String }], // Multiple choice options
  correctAnswers: [{ type: String, required: true }], // Array for multiple correct answers
  marks: { type: Number, required: true },
},{
    timestamps:true,
});

// Creating Question model
const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
