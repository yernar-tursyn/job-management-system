import React, { useState } from 'react';

function JobApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your application been submitted'); 
    console.log(formData); 
  };

  return (
    <div className="container">
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Resume:</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default JobApplication;
