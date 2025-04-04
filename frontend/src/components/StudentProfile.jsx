// src/StudentProfile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './profile.css';
import Dashboard from './Dashboard';

const StudentProfile = () => {
  const location = useLocation();
  const user = location.state?.user;
  return (
    <>
    <Dashboard />
    <div className="profile-container">
      <div className="profile-box">
        <img
          src="https://i.pravatar.cc/150?img=11"
          alt="Profile"
          className="profile-pic"
          height="250"
          width="250"
        />
        <h2>{user.name} {user.lastName}</h2>
        <p><strong>Email: </strong>{user.email}</p>
        {/* <p>Course: {user.course}</p> */}
        <p><strong>University: </strong>Vellore Institute of Technology</p>
      </div>
    </div>
    </>
  );

};

export default StudentProfile;
