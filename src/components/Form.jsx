import React from "react";
import "../styles/Contact.css";

function Form() {
  return (
    <form className="contact-form">
      <div className="heading">Drop Me a Message</div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows={4} placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" className="button-rev">Send Message</button>
    </form>
  )
}

export default Form;