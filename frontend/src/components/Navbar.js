import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon from FontAwesome

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px',
};

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth(); // Get isLoggedIn and logout from context
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout(); // Call logout from context
    navigate('/thankyou'); // Redirect to thank you or any other page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#236dcf' }}>
      <div className="container-fluid">
        <Link to="/" style={linkStyle}>
          YourHR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/jobsearch" style={linkStyle}>Job Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" style={linkStyle}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" style={linkStyle}>Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex ms-3 align-items-center">
            {isLoggedIn ? (
              <>
                <Link to="/profile" style={linkStyle}>
                  <FaUserCircle size={30} color="white" /> {/* Profile icon */}
                </Link>
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-outline-light ms-2">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-outline-light ms-2">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
