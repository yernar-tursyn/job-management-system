import React, { useState } from 'react';

function JobListings({ jobListings }) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h2>Job Listings</h2>
      <input
        type="text"
        placeholder="Search by title or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {currentJobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.salary} $</p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
