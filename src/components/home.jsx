import React, { useState } from "react";
import Profile from "./Profile";
import Donation from "./Donation";
import Opportunity from "./Opportunity";
import Registration from "./Registration";
import Event from "./Event";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // State to track the active component
  const [alumniProfiles, setAlumniProfiles] = useState([]);
  const [events, setEvents] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  // Function to add a new alumni profile to the list
  const addAlumniProfile = (profile) => {
    setAlumniProfiles([...alumniProfiles, profile]);
  };

  // Function to add a new event to the list
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // Function to handle button clicks and set the active component
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      {/* Render components based on the activeComponent state */}
      {activeComponent === "home" && (
        <Profile alumniProfiles={alumniProfiles} />
      )}
      {activeComponent === "donation" && <Donation />}
      {activeComponent === "opportunity" && <Opportunity />}
      {activeComponent === "registration" && (
        <Registration addAlumniProfile={addAlumniProfile} />
      )}
      {activeComponent === "event" && (
        <Event addEvent={addEvent} events={events} />
      )}

      {/* Floating Action Button */}
      <div style={fabContainerStyle}>
        <button onClick={() => setShowMenu(!showMenu)} style={fabStyle}>
          +
        </button>

        {/* Menu for showing/hiding components */}
        {showMenu && (
          <div style={menuStyle}>
            <button
              onClick={() => handleButtonClick("donation")}
              style={menuButtonStyle}
            >
              Donation
            </button>
            <button
              onClick={() => handleButtonClick("opportunity")}
              style={menuButtonStyle}
            >
              Opportunities
            </button>
            <button
              onClick={() => handleButtonClick("registration")}
              style={menuButtonStyle}
            >
              Registration
            </button>
            <button
              onClick={() => handleButtonClick("event")}
              style={menuButtonStyle}
            >
              Events
            </button>
            <button
              onClick={() => handleButtonClick("home")}
              style={menuButtonStyle}
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Styling for the floating action button container
const fabContainerStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
};

// Styling for the floating action button
const fabStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  color: "#fff",
  fontSize: "24px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

// Styling for the menu container
const menuStyle = {
  position: "absolute",
  bottom: "70px",
  right: "0",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

// Styling for each menu button
const menuButtonStyle = {
  padding: "10px 15px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#f1f1f1",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default Home;
