import './Hero.css';
import HeroImg from "../../assets/HeroImg.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Sonic Wave : The Future of Audio</h1>
        <p className="tagline">Experience crystal-clear sound with adaptive noise cancellation...</p>
        <div className="hero-buttons">
          <button className="btn primary btn-1">Get Started</button>
          <button className="btn secondary btn-1">Watch Demo</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img src={HeroImg} alt="Sonic Wave Audio System" />
        </div>
      </div>
    </section>
  );
}

export default Hero;