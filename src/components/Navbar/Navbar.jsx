import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-brand">
          <span className="gradient-text">SonicWave</span>
        </a>
        
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggle-icon"></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="#cta" className="nav-cta">Buy Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;