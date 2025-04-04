
import React from "react";

import "./landing.css";

import StudentRegister from "./StudentRegister.jsx";

const LandingRegister = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>TestTrack</h1>
        <p>Welcome to Online Examination</p>
      </div>
      <div className="content">
        <div className="image-section">
          <img
            src="https://examonline.in/wp-content/uploads/2020/11/What-Is-Online-Exam-2048x1245.png"
            alt="Exam Illustration"
          />
        </div>
        <div className="form-section">
          <StudentRegister />
        </div>
      </div>
    </div>
  );
};

export default LandingRegister;