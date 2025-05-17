import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: "bi-soundwave",
      title: "Adaptive Sound Technology",
      description: "Our proprietary algorithm analyzes your environment 200 times per second..."
    },
    {
      icon: "bi-battery-charging",
      title: "50-Hour Battery Life",
      description: "Industry-leading battery performance with quick-charge technology..."
    },
    {
      icon: "bi-gem",
      title: "Premium Comfort Design",
      description: "Memory foam cushions with breathable fabric and adjustable pressure..."
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Features That Set Us Apart</h2>
          <p>Discover why SonicWave is the choice of audio professionals worldwide</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-container">
                <i className={`bi ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;