import React from "react";
import "../styles/Navbar.css"
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return(
    <div className="navbar">
      <div className="navbar-link" onClick={() => {navigate("/")}}>Home</div>
      <div className="navbar-link" onClick={() => {navigate("/about")}}>About</div>
      <div className="navbar-link" onClick={() => {navigate("/skills")}}>Skills</div>
      <div className="navbar-link" onClick={() => {navigate("/projects")}}>Project</div>
      <div className="navbar-link" onClick={() => {navigate("/contact")}}>Contact</div>
    </div>
  )
}

export default Navbar;