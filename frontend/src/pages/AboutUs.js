import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about our company, our values, and the team that makes it all happen.</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center mb-4">Who We Are</h2>
              <p className="text-center">
                We are a dedicated team of professionals committed to delivering top-notch services to our clients. Our
                mission is to provide innovative solutions that drive success and create lasting relationships with our
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Team</h2>
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member 1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member 2"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Chief Marketing Officer</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h5 className="mt-3">Teamwork</h5>
              <p>We believe in the power of collaboration and working together to achieve common goals.</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="bi bi-lightbulb fs-1 text-primary"></i>
              <h5 className="mt-3">Innovation</h5>
              <p>We are constantly seeking new ways to innovate and improve our services and products.</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="bi bi-heart fs-1 text-primary"></i>
              <h5 className="mt-3">Integrity</h5>
              <p>We uphold the highest standards of integrity in all of our actions and decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
