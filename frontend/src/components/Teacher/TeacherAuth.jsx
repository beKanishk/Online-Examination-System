import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TeacherAuth = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    coursesTaught: "",
    profilePicture: "",
  });

  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/department/getAllDept");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  // Fetch courses when a department is selected
  useEffect(() => {
    if (formData.department) {
      const selectedDept = departments.find(dept => dept._id === formData.department);
      if (selectedDept) {
        setCourses(selectedDept.courses);
      }
    } else {
      setCourses([]);
    }
  }, [formData.department, departments]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || (isRegistering && (!formData.name || !formData.department))) {
      alert("Please fill out all required fields!");
      return;
    }

    const endpoint = isRegistering
      ? "http://localhost:3000/teacher/register"
      : "http://localhost:3000/teacher/login";

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201 || response.status === 200) {
        alert(`${isRegistering ? "Registration" : "Login"} Successful!`);
        // Redirect to login page after registration
        if (isRegistering) {
          setIsRegistering(false);
          navigate('/login');
        } else {
          // Redirect to dashboard after login
          navigate('/teacher/dashboard');
        }
      } else {
        alert(`${isRegistering ? "Registration" : "Login"} failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error(`Error during ${isRegistering ? "registration" : "login"}:`, error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isRegistering ? "Teacher Registration" : "Teacher Login"}</h2>

        {isRegistering && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required={isRegistering}
              className="auth-input"
            />

            <div className="department-selection">
              <label className="department-label">Select Department:</label>
              {departments.map((dept) => (
                <label key={dept._id} className="department-option">
                  <input
                    type="radio"
                    name="department"
                    value={dept._id}
                    checked={formData.department === dept._id}
                    onChange={handleChange}
                    required={isRegistering}
                  />
                  {dept.name}
                </label>
              ))}
            </div>

            {courses.length > 0 && (
              <div className="courses-selection">
                <label className="courses-label">Select Course:</label>
                {courses.map((course) => (
                  <label key={course._id} className="course-option">
                    <input
                      type="radio"
                      name="coursesTaught"
                      value={course._id}
                      checked={formData.coursesTaught === course._id}
                      onChange={handleChange}
                      required
                    />
                    {course.name}
                  </label>
                ))}
              </div>
            )}

            <input
              type="url"
              name="profilePicture"
              placeholder="Profile Picture URL (optional)"
              value={formData.profilePicture}
              onChange={handleChange}
              className="auth-input"
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {isRegistering ? "Register" : "Login"}
        </button>

        <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-form">
          {isRegistering
            ? "Already registered? Click here to login."
            : "New user? Click here to register."}
        </p>
      </form>
    </div>
  );
};

export default TeacherAuth;
