
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateExamForm from "./components/CreateExamForm.jsx";
import LandingRegister from "./components/LandingRegister.jsx";
import LandingLogin from "./components/LandingLogin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import StudentProfile from "./components/StudentProfile.jsx";
import TeacherAuth from "./components/Teacher/TeacherAuth.jsx";
import TeacherDashboard from "./components/Teacher/TeacherDashboard.jsx";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Dashboard />
      <div
        style={{
          marginLeft: "200px",
          width: "calc(100% - 200px)",
          marginTop: "70px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without Dashboard */}
        <Route path="/student/login" element={<LandingLogin />} />
        <Route path="/student/register" element={<LandingRegister />} />
        <Route path="/teacher/auth" element={<TeacherAuth />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* Routes with Dashboard */}
        <Route path="/exams" element={<CreateExamForm />} />
        <Route
          path="/student/profile"
          element={
            <Layout>
              <StudentProfile />
            </Layout>
          }
        />
        <Route
          path="/student/dashboard"
          element={
            <Layout>
              <h1>Welcome to the Dashboard</h1>
            </Layout>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<LandingLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
