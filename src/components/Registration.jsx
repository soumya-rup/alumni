import React, { useState } from "react";

const Registration = ({ addAlumniProfile }) => {
  // Form state to handle input values
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    degree: "",
    jobTitle: "",
    company: "",
    description: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and add new profile
  const handleSubmit = (e) => {
    e.preventDefault();
    addAlumniProfile(formData);
    setFormData({
      name: "",
      graduationYear: "",
      degree: "",
      jobTitle: "",
      company: "",
      description: "",
    });
  };

  return (
    <div style={formContainerStyle}>
      <h2>Register as an Alumni</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          value={formData.graduationYear}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
        <button type="submit" style={submitButtonStyle}>
          Register
        </button>
      </form>
    </div>
  );
};

// Styling for the form container
const formContainerStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "500px",
  margin: "20px auto",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

// Styling for the form
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

// Styling for the submit button
const submitButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
};

export default Registration;
