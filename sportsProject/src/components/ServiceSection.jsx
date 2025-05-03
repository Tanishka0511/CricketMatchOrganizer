import React from 'react';
import './ServiceSection.css';
import matchsch from '../assets/matchSchedule.jpg';
import teamMAnagement from '../assets/teamManagement.jpg'
import livescore from '../assets/thumb.png'

const services = [
  {
    title: 'Match Scheduling',
    img: matchsch,
    buttonText: 'BOOK NOW',
  },
  {
    title: 'Live Score Updates',
    img: livescore,
    buttonText: 'BOOK NOW',
  },
  {
    title: 'Team Management',
    img: teamMAnagement,
    // subtitle: 'Ended',
    buttonText: 'VIEW COURSE',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-wrapper">
      <div className="services-header">
        <h2>OUR SERVICES</h2>
        <button className="view-all">VIEW ALL</button>
      </div>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            {service.subtitle && <p className="subtitle">{service.subtitle}</p>}
            <button className="card-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
