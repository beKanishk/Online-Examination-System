import { useState } from "react";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [newExam, setNewExam] = useState({
    subject: "",
    startTime: "",
    endTime: "",
    rules: "",
    questions: [],
    timeLimit: "",
  });

  const handleChange = (e) => {
    setNewExam({ ...newExam, [e.target.name]: e.target.value });
  };

  const addExam = () => {
    setExams([...exams, { ...newExam, id: exams.length + 1 }]);
    setNewExam({ subject: "", startTime: "", endTime: "", rules: "", questions: [], timeLimit: "" });
  };

  return (
    <div>
      <h2>Exam Management</h2>
      <div>
        <label>Subject:</label>
        <input type="text" name="subject" value={newExam.subject} onChange={handleChange} /> <br />
        <label>Start Time:</label>
        <input type="datetime-local" name="startTime" value={newExam.startTime} onChange={handleChange} /><br />
        <label>End Time:</label>
        <input type="datetime-local" name="endTime" value={newExam.endTime} onChange={handleChange} /><br />
        <label>Rules:</label>
        <textarea name="rules" value={newExam.rules} onChange={handleChange} />
        <label>Time Limit (minutes):</label><br />  
        <input type="number" name="timeLimit" value={newExam.timeLimit} onChange={handleChange} /><br />  
        <button onClick={addExam}>Create Exam</button>
      </div>

      <h3>Available Exams</h3>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>
            <strong>{exam.subject}</strong> | {exam.startTime} - {exam.endTime} | Time Limit: {exam.timeLimit} minutes
            <p>Rules: {exam.rules}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exams;


