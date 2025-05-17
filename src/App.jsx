import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features id="features" />
      <Gallery id="gallery" />
      <Testimonials id="testimonials" />
      <ContactForm id="contact" />
      <Footer />
    </div>
  );
}

export default App;