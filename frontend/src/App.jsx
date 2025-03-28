import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import User from "./components/User.jsx";
import Exams from "./components/Exams.jsx";
import QuestionPage from "./components/QuestionPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/exams">Exams</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<User />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/questions" element={<QuestionPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
