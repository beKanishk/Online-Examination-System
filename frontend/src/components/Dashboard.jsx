
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './dashboard.css';

// function Dashboard() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   const userEmail = localStorage.getItem('email');

//   useEffect(() => {
//     if (userEmail) {
//       fetchUserData(userEmail);
//     }
//   }, [userEmail]);

//   const fetchUserData = async (email) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/userLogin/getUserByEmail?email=${email}`);
//       setUser(response.data[0]);
//     //   alert(JSON.stringify(response.data[0].name));
//     } catch (error) {
//       console.error('Failed to fetch user data:', error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('email');
//     alert('Logged out successfully!');
//     navigate('/student/login');
//   };

//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="h2d">Dashboard</h2>
//         <nav>
//           <Link to="/lab">
//             <i className="fas fa-flask"></i> Lab
//           </Link>
//           <Link to="/assessment">
//             <i className="fas fa-clipboard-list"></i> Assessment
//           </Link>
//           <Link to="/examination">
//             <i className="fas fa-file-alt"></i> Examination
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Top Bar */}
//         <div className="top-bar">
//           <input type="text" className="search-box" placeholder="Search..." />
          
//           <div className="dropdown">
//             <button onClick={() => setDropdownOpen(!dropdownOpen)}>
//               <i className="fas fa-user-circle"></i> {user?.name}
//             </button>
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/student/profile" state={{ user }}>Profile</Link>
//                 <a href='student/login' onClick={handleLogout}>Logout</a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './dashboard.css';

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    if (userEmail) {
      fetchUserData(userEmail);
    }
  }, [userEmail]);

  const fetchUserData = async (email) => {
    try {
      const response = await axios.get(`http://localhost:3000/userLogin/getUserByEmail?email=${email}`);
      setUser(response.data[0]);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    alert('Logged out successfully!');
    navigate('/student/login');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="h2d">Dashboard</h2>
        <nav>
          <Link to="/lab">
            <i className="fas fa-flask"></i> Lab
          </Link>
          <Link to="/assessment">
            <i className="fas fa-clipboard-list"></i> Assessment
          </Link>
          <Link to="/examination">
            <i className="fas fa-file-alt"></i> Examination
          </Link>
        </nav>
      </aside>

      {/* Top Bar */}
      <div className="top-bar">
        <input type="text" className="search-box" placeholder="Search..." />
        
        <div className="dropdown">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            <i className="fas fa-user-circle"></i> {user?.name}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/student/profile" state={{ user }}>Profile</Link>
              <a href="/student/login" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
