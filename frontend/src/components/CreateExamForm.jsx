import { useEffect, useState } from "react";
import axios from "axios";
// import "./createExam.css"

const CreateExamForm = () => {
  const [subjects] = useState(["DBMS", "OS", "DSA", "CN", "AI"]); // Static list of subjects
  const [selectedSubject, setSelectedSubject] = useState("");
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    totalMarks: "",
    gradingScheme: "",
    scheduledDate: "",
    teacher: "", // Manually added
    department: "",
    course: "",
  });

  // ✅ Fetch questions based on selected subject
  useEffect(() => {
    if (selectedSubject) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/exam/questions/${selectedSubject}`
          );
          setQuestions(response.data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };

      fetchQuestions();
    }
  }, [selectedSubject]);

  // ✅ Handle Question Selection
  const handleQuestionSelect = (questionId) => {
    if (selectedQuestions.includes(questionId)) {
      setSelectedQuestions(selectedQuestions.filter((id) => id !== questionId));
    } else {
      setSelectedQuestions([...selectedQuestions, questionId]);
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newExam = {
        ...formData,
        subject: selectedSubject,
        questions: selectedQuestions, // Selected question IDs
      };

      const response = await axios.post(
        "http://localhost:3000/exam/create",
        newExam
      );

      alert("Exam created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating exam:", error);
      alert("Failed to create exam.");
    }
  };

  return (
    <div className="container">
      <h2>Create Exam</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />

        {/* ✅ Select Subject */}
        <div>
          <h3>Select Subject:</h3>
          {subjects.map((subject) => (
            <label key={subject}>
              <input
                type="radio"
                value={subject}
                checked={selectedSubject === subject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              />
              {subject}
            </label>
          ))}
        </div>

        {/* ✅ Display Questions as Dropdown */}
        {questions.length > 0 && (
          <div>
            <h3>Select Questions:</h3>
            <select
              multiple
              value={selectedQuestions}
              onChange={(e) =>
                handleQuestionSelect(e.target.value)
              }
            >
              {questions.map((q) => (
                <option key={q._id} value={q._id}>
                  {q.questionText}
                </option>
              ))}
            </select>
          </div>
        )}

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Total Marks"
          value={formData.totalMarks}
          onChange={(e) =>
            setFormData({ ...formData, totalMarks: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Grading Scheme"
          value={formData.gradingScheme}
          onChange={(e) =>
            setFormData({ ...formData, gradingScheme: e.target.value })
          }
          required
        />
        <input
          type="date"
          value={formData.scheduledDate}
          onChange={(e) =>
            setFormData({ ...formData, scheduledDate: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Teacher"
          value={formData.teacher}
          onChange={(e) =>
            setFormData({ ...formData, teacher: e.target.value })
          }
          required
        />
        {/* <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
          required
        /> */}
        {/* <input
          type="text"
          placeholder="Course"
          value={formData.course}
          onChange={(e) =>
            setFormData({ ...formData, course: e.target.value })
          }
          required
        /> */}

        <button type="submit">Create Exam</button>
      </form>
    </div>
  );
};

export default CreateExamForm;
