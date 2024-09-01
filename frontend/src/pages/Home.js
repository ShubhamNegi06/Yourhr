import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Adjust the path as needed

const buttonStyle = {
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "blue"
};

// const linkStyle = {
//   textDecoration: "none",
//   color: "white",
// };

const HomePage = () => {
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
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Find Your Dream Job</h1>
          <p className="lead">Search for jobs and get hired by top companies.</p>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Job Search</h5>
                  <form onSubmit={(e) => { e.preventDefault(); navigate("/JobSearch"); }}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Job Title or Keywords"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Search Jobs
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Jobs</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer</h5>
                  <p className="card-text">Tech Company - San Francisco, CA</p>
                  <button className="btn btn-outline-light ms-2" style={buttonStyle} onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Analyst</h5>
                  <p className="card-text">Finance Corp - New York, NY</p>
                  <button className="btn btn-outline-light ms-2" style={buttonStyle} onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">UX Designer</h5>
                  <p className="card-text">Creative Agency - Austin, TX</p>
                  <button className="btn btn-outline-light ms-2" style={buttonStyle} onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
