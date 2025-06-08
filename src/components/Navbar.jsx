import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="navbar">
      <div className="subheading mobile" onClick={() => handleNavigate("/")}>Niharika manhar</div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="close"><div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* Hamburger icon */}
      </div></div>
        <div className="navbar-link" onClick={() => handleNavigate("/")}>Home</div>
        <div className="navbar-link" onClick={() => handleNavigate("/about")}>About</div>
        <div className="navbar-link" onClick={() => handleNavigate("/skills")}>Skills</div>
        <div className="navbar-link" onClick={() => handleNavigate("/projects")}>Project</div>
        <div className="navbar-link" onClick={() => handleNavigate("/contact")}>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;