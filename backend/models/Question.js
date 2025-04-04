import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    options: [{ type: String }], // For MCQs
    correctAnswer: { type: String },
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

const Question = mongoose.model('Question', QuestionSchema);
export default Question;
