import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards'; // Adjust the import path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}jobs`);
      const data = await response.json();
  
      // Remove duplicates based on job id
      const uniqueJobs = Array.from(new Map(data.map(job => [job.id, job])).values());
  
      setJobs(uniqueJobs);
      setFilteredJobs(uniqueJobs);
    };
  
    fetchJobs();
  }, []);
  
  useEffect(() => {
    // Filter jobs based on search and filter criteria
    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.company.toLowerCase().includes(companyFilter.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [search, companyFilter, locationFilter, jobs]);

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search by job title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Filter by company"
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 w-100" key={index}>
              <Cards 
                title={job.title} 
                company={job.company} 
                location={job.location} 
                description={job.description} 
              />
            </div>
          ))
        ) : (
          <div className="col-md-12">
            <p>No jobs found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
