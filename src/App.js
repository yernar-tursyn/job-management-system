import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import JobPosting from './components/JobPosting';
import JobListings from './components/JobListings';
import JobApplication from './components/JobApplication';
import JobManagement from './components/JobManagement';
import './styles/styles.css';

function App() {
  const defaultJobs = [
    { title: 'Frontend Developer', location: 'Almaty', salary: '3000' },
    { title: 'Backend Developer', location: 'Nur-Sultan', salary: '3500' },
  ];

  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem('jobListings');
    if (storedJobs) {
      setJobListings(JSON.parse(storedJobs));
    } else {
      setJobListings(defaultJobs);
      localStorage.setItem('jobListings', JSON.stringify(defaultJobs));
    }
  }, []);

  const addJobListing = (newJob) => {
    const updatedJobListings = [...jobListings, newJob];
    setJobListings(updatedJobListings);
    localStorage.setItem('jobListings', JSON.stringify(updatedJobListings));
  };

  const updateJobListing = (jobToUpdate, updatedData) => {
    const updatedJobListings = jobListings.map((job) =>
      job === jobToUpdate ? { ...job, ...updatedData } : job
    );
    setJobListings(updatedJobListings);
    localStorage.setItem('jobListings', JSON.stringify(updatedJobListings));
  };

  const deleteJobListing = (index) => {
    const updatedJobListings = jobListings.filter((_, i) => i !== index);
    setJobListings(updatedJobListings);
    localStorage.setItem('jobListings', JSON.stringify(updatedJobListings));
  };

  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/post-job">Post Job</Link>
          </li>
          <li>
            <Link to="/jobs">Job Listings</Link>
          </li>
          <li>
            <Link to="/apply">Apply for a Job</Link>
          </li>
          <li>
            <Link to="/manage-jobs">Manage Jobs</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to='/post-job' />} />
        <Route path="/post-job" element={<JobPosting addJobListing={addJobListing} />} />
        <Route path="/jobs" element={<JobListings jobListings={jobListings} />} />
        <Route path="/apply" element={<JobApplication />} />
        <Route
          path="/manage-jobs"
          element={
            <JobManagement
              jobListings={jobListings}
              updateJobListing={updateJobListing}
              deleteJobListing={deleteJobListing}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
