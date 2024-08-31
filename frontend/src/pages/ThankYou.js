import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ThankYou = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      {/* Thank You Message */}
      <div className="text-center mb-4">
        <h1 className="display-4">You Have Successfully Logged Out</h1>
        <p className="lead">Thank you for visiting JobSearchPortal. We hope to see you again soon!</p>
      </div>

      {/* Links Section */}
      <div className="d-flex flex-column flex-sm-row gap-3">
        {/* Using React Router's Link component */}
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
