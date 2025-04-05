// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faList, faFileCirclePlus, faSignOutAlt, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
// import './dashboard.css';

// const TeacherDashboard = () => {
//     const [activeSection, setActiveSection] = useState('');
//     const [teacherName, setTeacherName] = useState('Teacher Name');

//     useEffect(() => {
//         // Retrieve the teacher's name from localStorage
//         const storedName = localStorage.getItem('teacherName');
//         if (storedName) {
//             setTeacherName(storedName);
//         }
//     }, []);

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'CreateExam':
//                 return (
//                     <div className="content-area">
//                         <h2>Create Exam</h2>
//                         {/* Exam creation form or content goes here */}
//                     </div>
//                 );
//             case 'StudentList':
//                 return (
//                     <div className="content-area">
//                         <h2>Student List</h2>
//                         <ul>
//                             <li>Student 1</li>
//                             <li>Student 2</li>
//                             <li>Student 3</li>
//                         </ul>
//                     </div>
//                 );
//             case 'Result':
//                 return (
//                     <div className="content-area">
//                         <h2>Result of Student</h2>
//                         {/* Result display content goes here */}
//                     </div>
//                 );
//             default:
//                 return <div className="content-area">Select an option from the sidebar</div>;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <aside className="sidebar">
//                 <nav>
//                     <div onClick={() => setActiveSection('CreateExam')}>
//                         <FontAwesomeIcon icon={faFileCirclePlus} className="icon" /> Create Exam
//                     </div>
//                     <div onClick={() => setActiveSection('StudentList')}>
//                         <FontAwesomeIcon icon={faList} className="icon" /> Student List
//                     </div>
//                     <div onClick={() => setActiveSection('Result')}>
//                         <FontAwesomeIcon icon={faList} className="icon" /> Result of Student
//                     </div>
//                 </nav>
//             </aside>

//             <div className="mains-section">
//                 <header className="header">
//                     <h1>Teacher Dashboard</h1>
//                     <div className="profile-section">
//                         <span className="teacher-name">{teacherName}</span>
//                         <div className="profile-wrapper">
//                             <FontAwesomeIcon icon={faUser} className="profile-icon" />
//                             <div className="dropdown-content">
//                                 <div><FontAwesomeIcon icon={faEye} className="icon" /> View Profile</div>
//                                 <div><FontAwesomeIcon icon={faEdit} className="icon" /> Edit Profile</div>
//                                 <div><FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout</div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 <main className="main-content">
//                     {renderContent()}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default TeacherDashboard;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faList, faFileCirclePlus, faSignOutAlt, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
// import './dashboard.css';

// const TeacherDashboard = () => {
//     const [activeSection, setActiveSection] = useState('');
//     const [teacherName, setTeacherName] = useState('Teacher Name');

//     useEffect(() => {
//         const storedName = localStorage.getItem('teacherName');
//         if (storedName) {
//             setTeacherName(storedName);
//         }
//     }, []);

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'CreateExam':
//                 return (
//                     <div className="content-area">
//                         <h2>Create Exam</h2>
//                         {/* Exam creation form or content goes here */}
//                     </div>
//                 );
//             case 'StudentList':
//                 return (
//                     <div className="content-area">
//                         <h2>Student List</h2>
//                         <ul>
//                             <li>Student 1</li>
//                             <li>Student 2</li>
//                             <li>Student 3</li>
//                         </ul>
//                     </div>
//                 );
//             case 'Result':
//                 return (
//                     <div className="content-area">
//                         <h2>Result of Student</h2>
//                         {/* Result display content goes here */}
//                     </div>
//                 );
//             default:
//                 return <div className="content-area">Select an option from the sidebar</div>;
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <aside className="sidebar">
//                 <h2>Menu</h2>
//                 <nav>
//                     <div onClick={() => setActiveSection('CreateExam')}>
//                         <FontAwesomeIcon icon={faFileCirclePlus} className="icon" /> Create Exam
//                     </div>
//                     <div onClick={() => setActiveSection('StudentList')}>
//                         <FontAwesomeIcon icon={faList} className="icon" /> Student List
//                     </div>
//                     <div onClick={() => setActiveSection('Result')}>
//                         <FontAwesomeIcon icon={faList} className="icon" /> Result of Student
//                     </div>
//                 </nav>
//             </aside>

//             <div className="main-section">
//                 <header className="header">
//                     <h1>Teacher Dashboard</h1>
//                     <div className="profile-section">
//                         <span className="teacher-name">{teacherName}</span>
//                         <div className="profile-wrapper">
//                             <FontAwesomeIcon icon={faUser} className="profile-icon" />
//                             <div className="dropdown-content">
//                                 <div><FontAwesomeIcon icon={faEye} className="icon" /> View Profile</div>
//                                 <div><FontAwesomeIcon icon={faEdit} className="icon" /> Edit Profile</div>
//                                 <div><FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout</div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 <main className="main-content">
//                     {renderContent()}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default TeacherDashboard;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faFileCirclePlus, faSignOutAlt, faEdit, faEye, faVideo } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';

const TeacherDashboard = () => {
    const [activeSection, setActiveSection] = useState('');
    const [teacherName, setTeacherName] = useState('Teacher Name');
    const [students, setStudents] = useState([
        { id: 1, name: 'Student 1', videoStream: null, blocked: false },
        { id: 2, name: 'Student 2', videoStream: null, blocked: false }
    ]);

    useEffect(() => {
        const storedName = localStorage.getItem('teacherName');
        if (storedName) {
            setTeacherName(storedName);
        }
    }, []);

    // Function to block a student
    const blockStudent = (id) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === id ? { ...student, blocked: true } : student
            )
        );
        alert(`Student ${id} has been blocked!`);
    };

    // Function to simulate starting video feeds
    const startProctoring = () => {
        setStudents((prevStudents) =>
            prevStudents.map((student) => ({
                ...student,
                videoStream: `https://dummyvideo.com/student-${student.id}`
            }))
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'CreateExam':
                return (
                    <div className="content-area">
                        <h2>Create Exam</h2>
                        {/* Exam creation form */}
                    </div>
                );
            case 'StudentList':
                return (
                    <div className="content-area">
                        <h2>Student List</h2>
                        <ul>
                            {students.map((student) => (
                                <li key={student.id}>{student.name}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Result':
                return (
                    <div className="content-area">
                        <h2>Student Results</h2>
                        {/* Results display */}
                    </div>
                );
            case 'Proctoring':
                return (
                    <div className="content-area">
                        <h2>Live Proctoring</h2>
                        <button onClick={startProctoring}>Start Monitoring</button>
                        <div className="student-video-container">
                            {students.map((student) => (
                                <div key={student.id} className="student-video">
                                    <h4>{student.name}</h4>
                                    {student.videoStream ? (
                                        <video src={student.videoStream} autoPlay />
                                    ) : (
                                        <p>Waiting for student video...</p>
                                    )}
                                    {!student.blocked ? (
                                        <button onClick={() => blockStudent(student.id)}>Block</button>
                                    ) : (
                                        <p className="blocked">Blocked</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return <div className="content-area">Select an option from the sidebar</div>;
        }
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Menu</h2>
                <nav>
                    <div onClick={() => setActiveSection('CreateExam')}>
                        <FontAwesomeIcon icon={faFileCirclePlus} className="icon" /> Create Exam
                    </div>
                    <div onClick={() => setActiveSection('StudentList')}>
                        <FontAwesomeIcon icon={faList} className="icon" /> Student List
                    </div>
                    <div onClick={() => setActiveSection('Result')}>
                        <FontAwesomeIcon icon={faList} className="icon" /> Student Results
                    </div>
                    <div onClick={() => setActiveSection('Proctoring')}>
                        <FontAwesomeIcon icon={faVideo} className="icon" /> Live Proctoring
                    </div>
                </nav>
            </aside>

            <div className="main-section">
                <header className="header">
                    <h1>Teacher Dashboard</h1>
                    <div className="profile-section">
                        <span className="teacher-name">{teacherName}</span>
                        <div className="profile-wrapper">
                            <FontAwesomeIcon icon={faUser} className="profile-icon" />
                            <div className="dropdown-content">
                                <div><FontAwesomeIcon icon={faEye} className="icon" /> View Profile</div>
                                <div><FontAwesomeIcon icon={faEdit} className="icon" /> Edit Profile</div>
                                <div><FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout</div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboard;


