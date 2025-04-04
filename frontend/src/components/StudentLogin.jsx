import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./studentLogin.css";  // Import CSS file

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/userLogin/login", { email, password },{ headers: { "Content-Type": "application/json" }});
      // localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", email);
      alert("Login Successful!");
      navigate("/student/dashboard")
    } catch (error) {
      alert("Invalid credentials  "+error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Student Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="login-input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="login-input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="login-button">Login</button>

        {/* Link to Registration Page */}
        <p className="register-text">Not registered yet?  
          <button type="button" className="register-button" onClick={() => navigate("/student/register")}>Register Here</button>
        </p>
      </form>
    </div>
  );
};

export default StudentLogin;




