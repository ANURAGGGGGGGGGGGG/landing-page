import { useState, useEffect } from 'react';
import './Gallery.css';
import BlackEdition from "../../assets/BlackEdition.png";
import WhiteEdition from "../../assets/WhiteEdition.png";
import LimitedEdtion from "../../assets/LimitedEdition.png";
import InAction from "../../assets/InAction.png";

function Gallery({ id }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    {
      src: BlackEdition,
      alt: "SonicWave Headphones - Black Edition",
      caption: "Black Edition"
    },
    {
      src: WhiteEdition,
      alt: "SonicWave Headphones - White Edition",
      caption: "White Edition"
    },
    {
      src: LimitedEdtion,
      alt: "SonicWave Headphones - Limited Gold Edition",
      caption: "Limited Gold Edition"
    },
    {
      src: InAction,
      alt: "SonicWave Headphones in use",
      caption: "In Action"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlide, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section id={id} className="gallery">
      <h2>Product Gallery</h2>
      <div 
        className="gallery-carousel"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <div className="carousel-content">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="carousel-image"
          />
          <p className="image-caption">{images[activeIndex].caption}</p>
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;