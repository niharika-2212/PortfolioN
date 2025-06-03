import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
        <div><div className="heading typewriter">Hi! I'm Niharika Manhar.</div></div>
        <div className="subheading">Full Stack Web Developer</div>
        <div className="text">I build websites that range from static pages to real-time web apps.</div>
        <div className="buttons">
          <div className="button" onClick={()=>{navigate("/projects")}}>View Projects</div>
          <div className="button-rev" onClick={()=>{navigate("/contact")}}>Download Resume</div>
        </div>
    </div>
  )
}

export default Home;