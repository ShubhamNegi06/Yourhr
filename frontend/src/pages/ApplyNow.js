// ApplyNow.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ApplyNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'resume' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSubmit.append(key, formData[key]);
        });

        // Example POST request to a server endpoint
        // fetch('YOUR_API_ENDPOINT', {
        //     method: 'POST',
        //     body: formDataToSubmit
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Apply Now</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Resume (PDF)</label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        className="form-control-file"
                        accept=".pdf"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        className="form-control"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyNow;
