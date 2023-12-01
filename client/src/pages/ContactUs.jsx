import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className="background-container">
        {/* Background image goes here */}
      </div>
      <div className="contact-us-container">
        <div className="contact-us">
          <h2>Contact Us</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <p>
                Thank you very much for reaching out! We will respond to your inquiry
                faster than a Chihuahua can chew through a pair of new shoes!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
