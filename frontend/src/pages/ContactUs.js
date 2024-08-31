import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you! Fill out the form below or reach out through our contact details.</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Get in Touch</h5>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Contact Details</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt-fill fs-3 me-3 text-primary"></i>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <p className="mb-0">1234 Street Name, City, Country</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-fill fs-3 me-3 text-primary"></i>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p className="mb-0">+123 456 7890</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope-fill fs-3 me-3 text-primary"></i>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <p className="mb-0">contact@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2024 YourCompany. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
