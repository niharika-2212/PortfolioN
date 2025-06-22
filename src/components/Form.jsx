import React, { useState, useRef } from "react";
import axios from "axios";
import "../styles/Contact.css";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // 'success', 'error', or ''
  const formRef = useRef(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; // update information on change

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(""); // reset status

    const myForm = event.target;
    const formData = new FormData(myForm);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      myForm.reset(); // optional native reset
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {/* Required for Netlify to recognize the form */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="heading">Drop Me a Message</div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="button-rev send">Send Message</button>
      </form>

      {/* Toast notifications */}
      {status === "success" && (
        <div className="toast success">Thanks for your message! I'll get back soon.</div>
      )}
      {status === "error" && (
        <div className="toast error">Oops! Something went wrong. Please try again.</div>
      )}
    </>
  );
}

export default Form;
