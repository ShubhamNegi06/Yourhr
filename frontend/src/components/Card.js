import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
// Button and link styles
const buttonStyle = {
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "blue",
};

// const linkStyle = {
//   textDecoration: "none",
//   color: "white",
// };

// Card style (adjusted for responsiveness)
const cardStyle = {
  width: "100%",
  height: "100%",
  margin: "0 auto",
  display:  "flex",
  gap: "1.5rem",
  padding:  "rem",

};

const Card = ({ title, company, location, description }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // Use the authentication context

  const handleApplyNowClick = () => {
    if (isLoggedIn) {
      navigate("/applynow");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="card h-100" style={cardStyle}>
      <div className="card-body d-flex flex-column" style={cardStyle}>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
        <p className="card-text text-muted">{location}</p>
        <p className="card-text flex-grow-1">{description}</p>
        <button className="btn btn-outline-light mt-auto" style={buttonStyle} onClick={handleApplyNowClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
