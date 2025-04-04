import Exam from '../models/Exam.js';
import Question from '../models/Question.js';
import Teacher from '../models/Teacher.js';

// ✅ Get Questions by Subject
const getQuestionsBySubject = async (req, res) => {
  const { subject } = req.params;

  try {
    const questions = await Question.find({ subject });
    if (questions.length > 0) {
      res.json(questions);
    } else {
      res.status(404).json({ message: 'No questions found for this subject' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching questions', error: err.message });
  }
};

// ✅ Create Exam (No Token)
const createExam = async (req, res) => {
    const {
      title,
      description,
      subject,
      questions, // Array of question IDs
      duration,
      totalMarks,
      gradingScheme,
      scheduledDate,
      teacher, // Manually from frontend form
    } = req.body;
  
    // ✅ Validate required fields
    if (
      !title ||
      !description ||
      !subject ||
      !questions ||
      !duration ||
      !totalMarks ||
      !gradingScheme ||
      !scheduledDate ||
      !teacher
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // ✅ Create exam instance
      const exam = new Exam({
        title,
        description,
        subject,
        teacher,
        questions,
        duration,
        totalMarks,
        gradingScheme,
        scheduledDate,
      });
  
      // ✅ Save to database
      const createdExam = await exam.save();
  
      // ✅ Update teacher's record to include this exam
      await Teacher.findByIdAndUpdate(
        teacher,
        { $push: { examsCreated: createdExam._id } }, // ✅ Add exam to teacher's `examsCreated`
        { new: true }
      );
  
      // ✅ Return created exam response
      res.status(201).json({message:"exam created successfully",createdExam});
    } catch (err) {
      res.status(500).json({ message: "Error creating exam", error: err.message });
    }
  };
  
  
export { createExam, getQuestionsBySubject };
