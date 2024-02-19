import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="left-box">
        <div className="contact-info">
          <span className="contact-info-1">Ready to</span>
          <span className="contact-info-2">transcend</span>
          <span className="contact-info-3"> the ordinary? </span>
        </div>
      </div>
      <div className="right-box">
        <p className="right-box-desc">
          Click here to start your journey into the future of private market
          investments. For more information, connect with us directly through
          the contact form below.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone no.</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Query ( if any )</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
