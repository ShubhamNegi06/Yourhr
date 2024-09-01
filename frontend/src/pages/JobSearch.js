import React, { useEffect } from 'react';
import Cards from '../components/Cards'; // Adjust the import path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

const JobSearch = () => {

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}jobs`);
      const data = await response.json();
      console.log(data);
    };
  
    fetchJobs();
  }, );
  

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search by job title"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Filter by company"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Filter by location"
          />
        </div>
      </div>
      <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 w-100" >
              <Cards 
                title= ''
                company= ''
                location= ''
                description=''
              />
            </div>
      </div>
    </div>
  );
};

export default JobSearch;
