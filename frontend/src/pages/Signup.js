import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    role: "",
    file: null,
    agreedToTerms: false, 
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      role: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.address ||
      !formData.phone ||
      !formData.city ||
      !formData.state ||
      !formData.zip
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formData.agreedToTerms) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    if (!formData.file) {
      setError("Please upload a file.");
      return;
    }

    if (!formData.role) {
      setError("Please select a role.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const url = `${process.env.REACT_APP_BACKEND_URL}users/signup`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        navigate("/Login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Sign Up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input className="form-control" id="firstName" required onChange={handleChange} />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input className="form-control" id="lastName" required onChange={handleChange} />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" required onChange={handleChange} />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" required onChange={handleChange} />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required onChange={handleChange} />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" required onChange={handleChange} />
        </div>
        <div className="col-md-4 col-sm-12">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="state" required onChange={handleChange} />
        </div>
        <div className="col-md-2 col-sm-12">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="zip" onChange={handleChange} />
        </div>
        <div className="col-md-6 col-sm-12">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input type="tel" className="form-control" id="phone" required onChange={handleChange} />
        </div>
        <div className="col-12">
          <fieldset>
            <legend style={{ fontSize: '1.1rem' }}>Role</legend>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="roleJobSeeker"
                name="role"
                value="Job Seeker"
                checked={formData.role === "Job Seeker"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label" htmlFor="roleJobSeeker">
                Job Seeker
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="roleRecruiter"
                name="role"
                value="Recruiter"
                checked={formData.role === "Recruiter"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label" htmlFor="roleRecruiter">
                Recruiter
              </label>
            </div>
          </fieldset>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <input type="file" className="form-control" id="file" required onChange={handleChange} />
            <div className="invalid-feedback">
              Example invalid form file feedback
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="agreedToTerms" required onChange={handleChange} />
            <label className="form-check-label" htmlFor="agreedToTerms">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
