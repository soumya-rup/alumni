import React from "react";

const Opportunity = () => {
  // Array of hardcoded job and internship opportunities
  const opportunities = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Tech Innovations",
      location: "Remote",
      type: "Internship",
      description:
        "Join our team as a software engineer intern and work on exciting projects in a fast-paced environment. Learn and grow with us!",
    },
    {
      id: 2,
      title: "Marketing Associate",
      company: "Creative Minds Co.",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We are looking for a dynamic marketing associate to join our team. You will be responsible for developing and executing marketing strategies.",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Data Insights Corp.",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Analyze complex data sets to provide actionable insights. Ideal for recent graduates with a background in data science or statistics.",
    },
    {
      id: 4,
      title: "UX/UI Designer Intern",
      company: "Design Hub",
      location: "Remote",
      type: "Internship",
      description:
        "Work closely with our design team to create user-friendly interfaces. A great opportunity for students or recent graduates in design.",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovate Corp.",
      location: "Boston, MA",
      type: "Full-time",
      description:
        "Lead cross-functional teams to bring innovative products to market. Requires experience in product management and strong leadership skills.",
    },
  ];

  return (
    <div style={opportunitiesContainerStyle}>
      <h2>Job & Internship Opportunities</h2>
      {opportunities.map((opportunity) => (
        <div key={opportunity.id} style={opportunityStyle}>
          <h3>{opportunity.title}</h3>
          <p>
            <strong>Company:</strong> {opportunity.company}
          </p>
          <p>
            <strong>Location:</strong> {opportunity.location}
          </p>
          <p>
            <strong>Type:</strong> {opportunity.type}
          </p>
          <p>{opportunity.description}</p>
        </div>
      ))}
    </div>
  );
};

// Styling for the opportunities container
const opportunitiesContainerStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "800px",
  margin: "20px auto",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
};

// Styling for each opportunity card
const opportunityStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "5px",
  margin: "10px 0",
  backgroundColor: "#f9f9f9",
};

export default Opportunity;
