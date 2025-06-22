import React, { useState } from "react";
import "../styles/Contact.css";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // 'success', 'error', or ''

  // Update form data
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(""); // reset status

    const response = await fetch("https://formspree.io/f/meokqdnb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <form className="contact-form" netlify>
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

      {/* Toast notification */}
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