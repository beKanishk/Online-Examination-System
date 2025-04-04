import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./studentRegister.css"; // Import CSS file

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    course: "", // Store the selected course's ObjectId
    profilePicture: "",
  });

  const [courses, setCourses] = useState([]); // State to store courses fetched from the backend
  const navigate = useNavigate();

  // Fetch courses from the backend when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/course/getAllCourse");
        const data = await response.json();
        console.log(data);
        
        setCourses(data); // Assuming the response is an array of course objects with _id and name
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if ( !formData.email || !formData.password ) {
      alert("Please fill out all required fields!");
      return;
    }

    // Prepare the data to match the backend's expected field names
    const registrationData = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      course: formData.course, // Send the selected course's ObjectId
      profilePicture: formData.profilePicture,
    };
    // alert(registrationData);
    try {
        const response = await fetch("http://localhost:3000/userLogin/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");
        navigate("/student/login")
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Student Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="register-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="register-input"
        />

        <div className="course-selection">
          <label className="course-label">Select Course:</label>
          {courses.map((course) => (
            <label key={course._id} className="course-option">
              <input
                type="radio"
                name="course"
                value={course._id}
                checked={formData.course === course._id}
                onChange={handleChange}
                required
              />
              {course.name}
            </label>
          ))}
        </div>

        <div className="profile-url">
          <input
            type="url"
            name="profilePicture"
            placeholder="Profile Picture URL (optional)"
            value={formData.profilePicture}
            onChange={handleChange}
            className="register-input"
          />
          {formData.profilePicture && (
            <img
              src={formData.profilePicture}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <p className="login-text">
          Already registered?
          <button
            type="button"
            className="login-button"
            onClick={() => navigate("/student/login")}
          >
            Login Here
          </button>
        </p>
      </form>
    </div>
  );
};

export default StudentRegister;





