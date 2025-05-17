import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="cta">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-cta">
            <h2>Ready to Experience Audio Perfection?</h2>
            <p>Join thousands of satisfied customers who have elevated their listening experience with SonicWave.</p>
            <div className="footer-actions">
              <a href="#" className="cta-button primary">Buy Now - $299</a>
              <a href="#" className="cta-button secondary">Learn More</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>Product</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="#" className="social-link facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-link twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="social-link instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-link youtube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 SonicWave. All rights reserved.</p>
          <ul className="legal-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;