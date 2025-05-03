import React from 'react';
import './AboutUs.css';
import Image from '../assets/b1.jpg';


const cardData = [
  {
    image: Image,
    title: 'Person 1',
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus repellat quod obcaecati maxime! Expedita illum repellat corporis rem similique unde officiis sequi, facere alias illo libero. Cupiditate non sint reprehenderit quo perferendis incidunt iure dolorum vitae illum nulla velit ducimus sapiente veniam libero, repellat soluta aut.'
  },
  {
    image: Image,
    title: 'Person 2',
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus repellat quod obcaecati maxime! Expedita illum repellat corporis rem similique unde officiis sequi, facere alias illo libero. Cupiditate non sint reprehenderit quo perferendis incidunt iure dolorum vitae illum nulla velit ducimus sapiente veniam libero, repellat soluta aut.'
  },
  {
    image: Image,
    title: 'Person 3',
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus repellat quod obcaecati maxime! Expedita illum repellat corporis rem similique unde officiis sequi, facere alias illo libero. Cupiditate non sint reprehenderit quo perferendis incidunt iure dolorum vitae illum nulla velit ducimus sapiente veniam libero, repellat soluta aut.'
  },
  {
    image: Image,
    title: 'Person 4',
    description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusamus repellat quod obcaecati maxime! Expedita illum repellat corporis rem similique unde officiis sequi, facere alias illo libero. Cupiditate non sint reprehenderit quo perferendis incidunt iure dolorum vitae illum nulla velit ducimus sapiente veniam libero, repellat soluta aut.'
  },
];

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h2 className="about-heading">About Us</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="about-card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default AboutUs;
