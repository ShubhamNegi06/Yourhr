import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

  // Inline styles
  const footerStyle = {
    backgroundColor: "#0d6efd"
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none"
    };

const Footer = () => {
  return (
    <footer className="text-light py-4" style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are a company that specializes in delivering high-quality products and services to our customers.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <li> <Link to={"/"} style={linkStyle}><p>Home</p></Link></li>
            <li> <Link to={"/about"} style={linkStyle}><p>About Us</p></Link></li>
            <li> <Link to={"/contactus"} style={linkStyle}><p>Contact Us</p></Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              1234 Street Name, City, State, 12345<br />
              Email: <a href="mailto:info@example.com" className="text-light">info@example.com</a><br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
