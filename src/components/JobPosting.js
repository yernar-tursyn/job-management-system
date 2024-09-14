import React, { useState } from 'react';

function JobPosting({ addJobListing }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    location: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'salary') {
      if (!isNaN(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.description && formData.salary && formData.location) {
      addJobListing(formData);

      setSuccessMessage('Job successfully added to the list!');

      setFormData({
        title: '',
        description: '',
        salary: '',
        location: ''
      });

      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setSuccessMessage('Please complete all fields.');

      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="container">
      <h2>Create a Job Posting</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salary Range (only numbers):</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobPosting;
