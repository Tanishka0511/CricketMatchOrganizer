import React from 'react';
import './TeamsSection.css';
import mi from '../assets/mi.jpg';
import CSK from '../assets/CSK.jpg';
import DC from '../assets/DC.jpg';
import Guj from '../assets/guj.jpg';
import hyd from '../assets/hyd.jpg';
import knr from '../assets/knr.jpg';
import lucknow from '../assets/lucknow.jpg';
import pun from '../assets/pun.jpg';
import raj from '../assets/raj.jpg';
import rcb from '../assets/rcb.jpg';




const teams = [
  { name: 'Mumbai Indians', img: mi, desc: 'Five-time champions known for strong leadership.', link: 'https://www.iplt20.com/teams/mumbai-indians' },
  { name: 'Royal Challengers Bangalore', img: rcb, desc: 'Known for passionate fans and star players.', link: 'https://www.iplt20.com/teams/royal-challengers-bangalore' },
  { name: 'Chennai Super Kings', img: CSK, desc: 'Four-time champions led by MS Dhoni.', link: 'https://www.iplt20.com/teams/chennai-super-kings'  },
  { name: 'Delhi Capitals', img: DC, desc: 'Rising contenders with young talent.', link: 'https://www.iplt20.com/teams/delhi-capitals' },
  { name: 'Kolkata Knight Riders', img:knr, desc: 'Backed by star power and strategy.', link: 'https://www.iplt20.com/teams/kolkata-knight-riders' },
  { name: 'Sunrisers Hyderabad', img: hyd, desc: 'Solid bowling unit and consistent play.', link: 'https://www.iplt20.com/teams/sunrisers-hyderabad' },
  { name: 'Rajasthan Royals', img: raj, desc: 'Inaugural IPL champions with youthful energy.', link: 'https://www.iplt20.com/teams/rajasthan-royals' },
  { name: 'Punjab Kings', img: pun, desc: 'Known for unpredictable and exciting matches.', link: 'https://www.iplt20.com/teams/punjab-kings' },
  { name: 'Lucknow Super Giants', img: lucknow, desc: 'New franchise with big ambitions.', link: 'https://www.iplt20.com/teams/lucknow-super-giants' },
  { name: 'Gujarat Titans', img: Guj, desc: 'Won IPL in their debut season.', link: 'https://www.iplt20.com/teams/gujarat-titans' },
];

const IplTeams = () => {
  const scrollCarousel = (direction) => {
    const carousel = document.querySelector('.ipl-carousel');
    const scrollAmount = direction === 'left' ? -carousel.offsetWidth / 2 : carousel.offsetWidth / 2;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="ipl-wrapper">
      <div className="ipl-section">
        <h2 className="ipl-title">About the IPL Teams</h2>
        <div className="ipl-carousel">
          {teams.map((team, index) => (
            <div className="team-card" key={index}>
              <img src={team.img} alt={team.name} className="team-logo" />
              <h3>{team.name}</h3>
              <p className="team-desc">{team.desc}</p>
              <a href={team.link} className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
        <button className="scroll-btn left" onClick={() => scrollCarousel('left')}>❮</button>
        <button className="scroll-btn right" onClick={() => scrollCarousel('right')}>❯</button>
      </div>
    </section>
  );
};

export default IplTeams;
