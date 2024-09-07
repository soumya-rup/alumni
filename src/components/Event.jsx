import React, { useState } from "react";

const Event = ({ addEvent, events }) => {
  // Form state to handle input values
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    type: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and add new event
  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    setFormData({
      title: "",
      date: "",
      description: "",
      type: "",
    });
  };

  return (
    <div style={eventContainerStyle}>
      <h2>Create an Event</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Event Date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Event Type (e.g., Hackathon, Internship)"
          value={formData.type}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
        <button type="submit" style={submitButtonStyle}>
          Add Event
        </button>
      </form>
      <div style={eventsListStyle}>
        <h3>Upcoming Events</h3>
        {events.length === 0 ? (
          <p>No events created yet.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} style={eventCardStyle}>
              <h4>{event.title}</h4>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Type:</strong> {event.type}
              </p>
              <p>{event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Styling for the event container
const eventContainerStyle = {
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

// Styling for the events list
const eventsListStyle = {
  marginTop: "20px",
};

// Styling for each event card
const eventCardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "5px",
  margin: "10px 0",
  backgroundColor: "#f9f9f9",
  textAlign: "left",
};

export default Event;
