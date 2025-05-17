import './Testimonials.css';

function Testimonials({ id }) {
  const testimonials = [
    {
      text: "After installing SecureGuard Pro, I finally sleep soundly at night. The AI detection is incredible - no more false alarms from our cat!",
      author: "Sarah J.",
      location: "Dallas, TX"
    },
    {
      text: "The mobile app is so intuitive, I can check on my home anytime, anywhere. Best investment for our family's peace of mind.",
      author: "Michael T.",
      location: "Chicago, IL"
    },
    {
      text: "Setup was incredibly easy, and the customer service team was helpful with all my questions. Highly recommend!",
      author: "Lisa M.",
      location: "Portland, OR"
    }
  ];

  return (
    <section id={id} className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote">"</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.author}, {testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;