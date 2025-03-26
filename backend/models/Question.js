import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    options: [{ type: String }], // For MCQs
    correctAnswer: { type: String },
    type: {
      type: String,
      enum: ["MCQ", "True/False", "Descriptive", "Coding"],
      required: true,
    },
    subject: { type: String, required: true }, // Example: 'DBMS', 'Operating System'
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creating Question model
const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
