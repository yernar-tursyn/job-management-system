import React, { useState } from 'react';

function JobManagement({ jobListings, updateJobListing, deleteJobListing }) {
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    salary: '',
  });

  const startEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      location: job.location,
      salary: job.salary,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateJobListing(editingJob, formData);
    setEditingJob(null); 
  };

  return (
    <div className="container">
      <h2>Job Management</h2>
      <ul>
        {jobListings.map((job, index) => (
          <li key={index}>
            {editingJob && editingJob === job ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Salary"
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <p>{job.salary} $</p>
                <div className='job-controls'>
                    <button onClick={() => startEdit(job)}>Edit</button>
                    <button onClick={() => deleteJobListing(index)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobManagement;
