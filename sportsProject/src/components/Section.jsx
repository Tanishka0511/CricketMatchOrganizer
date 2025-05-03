import './Section.css';
import heroImg from '../assets/bg.jpg';

const Section = () => {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>MAXIMIZE YOUR FULL POTENTIAL.</h1>
        <p>Mental and performance training for athletes and coaches</p>
        <button className="book-btn">BOOK NOW</button>
      </div>
    </section>
  );
};

export default Section;
