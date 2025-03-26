import  { useEffect, useState } from "react";

function QuestionPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions/getQuestions") // Update with your backend URL
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <strong>{q.questionText}</strong>
            {q.options && (
              <ul>
                {q.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionPage;
