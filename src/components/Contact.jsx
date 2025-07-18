import React from "react";
import "../styles/Contact.css";
import Form from "./Form.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact">
      <div className="left-contact">
        <Form />
      </div>
      <div className="right-contact">
        <div className="resume">
          <div className="heading">Resume</div>
          <a href="https://drive.google.com/file/d/1v3win7D6CFlBPeLdT45sID1HIP7wF2dZ/view?usp=sharing" className="button-rev" target="_blank">Download Resume</a>
        </div>
        <div className="socials">
          <div className="heading">Contact me</div>
          <div className="email">Email : <a href="mailto:niharikamanhar476@gmail.com">niharikamanhar476@gmail.com</a></div>
          <div className="socials-links">
            <a href="https://github.com/niharika-2212" target="_blank"><FaGithub className="icons contact-icons"/></a>
            <a href="https://www.linkedin.com/in/niharika-manhar/" target="_blank"><FaLinkedin className="icons contact-icons"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;