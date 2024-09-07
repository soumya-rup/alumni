import React from "react";

const Profile = ({ alumniProfiles }) => {
  // Default hardcoded alumni profiles
  const defaultProfiles = [
    {
      id: 1,
      name: "John Doe",
      graduationYear: 2020,
      degree: "B.Sc. Computer Science",
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      description:
        "John is a passionate software engineer with expertise in web development and AI technologies. He has been working at Tech Solutions Inc. since his graduation.",
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
    // Other default profiles...
  ];

  // Combine default and registered profiles
  const allProfiles = [...defaultProfiles, ...alumniProfiles];

  return (
    <div style={profilesContainerStyle}>
      {allProfiles.map((alumni, index) => (
        <div key={index} style={profileStyle}>
          <h2>{alumni.name}</h2>
          <p>
            <strong>Graduation Year:</strong> {alumni.graduationYear}
          </p>
          <p>
            <strong>Degree:</strong> {alumni.degree}
          </p>
          <p>
            <strong>Job Title:</strong> {alumni.jobTitle}
          </p>
          <p>
            <strong>Company:</strong> {alumni.company}
          </p>
          <p>{alumni.description}</p>
        </div>
      ))}
    </div>
  );
};

// Styling for the profiles container
const profilesContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  padding: "20px",
};

// Styling for each profile card
const profileStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};

export default Profile;
