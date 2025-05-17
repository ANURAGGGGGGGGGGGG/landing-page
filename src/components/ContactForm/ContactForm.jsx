import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-intro">Have questions about SonicWave? Our team is here to help you find the perfect audio solution.</p>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@sonicwave.example</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>123 Audio Lane, Soundtown, ST 12345</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-card">
              <h3>Send us a message</h3>
              <form className="message-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                  </div>
                  <div className="form-submit full-width">
                    <button type="submit" className="submit-button">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;