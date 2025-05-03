import React, { useEffect, useState } from 'react';
import './Slider.css';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';


const testimonials = [
  {
    text: `"I'm a testimonial. Click to edit me and add text that says something nice about you and your services."`,
    author: 'COACH EVAN',
    bgImage: b1,
  },
  {
    text: `"Let your customers review you and tell their friends how great you are."`,
    author: 'CAPTAIN LISA',
    bgImage: b2,
  },
  {
    text: `"Great service, wonderful experience. Will definitely recommend!"`,
    author: 'PLAYER JOHN',
    bgImage: b3,
  },
  {
    text: `"Reliable and professional – truly outstanding support."`,
    author: 'MANAGER ZOE',
    bgImage: b4,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [clicked, setClicked] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  const handleArrowClick = (direction) => {
    setClicked(direction);
    setTimeout(() => setClicked(''), 1000);
    direction === 'left' ? prev() : next();
  };

  const activeSlide = testimonials[current];

  return (
    <section
      className="testimonial-wrapper"
      style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
    >
      <button
        className={`arrow left ${clicked === 'left' ? 'clicked' : ''}`}
        onClick={() => handleArrowClick('left')}
      >
        &lt;
      </button>

      <div className="testimonial-container">
        <div className="testimonial-slide active">
          <div className="testimonial-frame">
            <p className="testimonial-text">{activeSlide.text}</p>
            <p className="testimonial-author">{activeSlide.author}</p>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <button
        className={`arrow right ${clicked === 'right' ? 'clicked' : ''}`}
        onClick={() => handleArrowClick('right')}
      >
        &gt;
      </button>
    </section>
  );
};

export default TestimonialSlider;
