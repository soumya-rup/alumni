import React from "react";

const Donation = () => {
  return (
    <div style={donationStyle}>
      <h2>Support Our Alumni!</h2>
      <p>
        Your contributions help us continue to support our alumni community with
        resources, networking opportunities, and career support. Every donation
        makes a difference!
      </p>
      <button style={donateButtonStyle}>Donate Now</button>
    </div>
  );
};

// Styling for the donation section
const donationStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "500px",
  margin: "20px auto",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

// Styling for the donate button
const donateButtonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
};

export default Donation;
