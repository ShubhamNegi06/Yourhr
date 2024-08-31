import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // or useHistory for React Router v5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding:  "10px",
    };

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // or const history = useHistory(); for React Router v5
const handleSignUpClick = () =>  { navigate("/signup")};
  const handleLoginClick = () => {setIsLoggedIn(true); navigate("/login")}
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate("/thankyou");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#236dcf" }}>
      <div className="container-fluid">
        <Link to={"/"}  style={linkStyle}>
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
            <Link to={"/"} style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to={"/jobsearch"} style={linkStyle}>Job Search</Link>
            </li>
            <li className="nav-item">
            <Link to={"/about"} style={linkStyle}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to={"/contactus"} style={linkStyle}>Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex ms-3">
            {isLoggedIn ? (
              <button
                className="btn btn-outline-light ms-2"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={handleSignUpClick} // Replace with actual sign-up logic
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
