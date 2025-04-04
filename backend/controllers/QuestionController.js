import Question from "../models/Question.js";


export  const addQuestion = async (req, res) => {
  const { questionText, options, correctAnswer, subject, difficulty } =
    req.body;

  if ( !questionText || !correctAnswer || !subject || !difficulty) {
    return res.status(422).json({ message: "All fields are required" });
  }

  try {
    let existingQuestion = await Question.findOne({ questionText });
    if (existingQuestion) {
      return res.status(400).json({ message: "Question already exists" });
    }

    let newQuestion = new Question({
      questionText,
      options: options || [],
      correctAnswer,
      subject,
      difficulty,
    });

    await newQuestion.save();
    res
      .status(200)
      .json({ message: "Question added successfully", newQuestion });
  } catch (err) {
    res.status(500).json({ message: "Error occurred", err });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions", err });
  }
};
