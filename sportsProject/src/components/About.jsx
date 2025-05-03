// src/components/About.jsx
import React from 'react';
import './About.css';
import athleteImage from '../assets/ipl_t.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h2>ABOUT APEX</h2>
        <div className="underline"></div>
        <p>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nulla inventore atque laudantium molestias porro ducimus debitis rem ex voluptas velit commodi nisi, ad saepe aliquid culpa laboriosam, tempora obcaecati sapiente facilis itaque libero optio quis. Unde nisi dolorem quo.</div>
          <div>Deserunt quisquam ex vel harum repellat rerum alias perspiciatis velit commodi aperiam, cupiditate repellendus! Hic eaque quidem commodi placeat obcaecati dolore. Tenetur corporis corrupti quo, ratione adipisci vitae earum, dignissimos quas quis dicta ipsum velit aliquam excepturi esse. Velit, perspiciatis.</div>
          <div>Eos est voluptas corporis expedita placeat nemo sint qui quos temporibus ullam eaque excepturi ipsum illo repudiandae eveniet sit dolores, aut molestias. Ratione voluptas ut sed reiciendis alias tenetur quia commodi, iure odio cupiditate ad facere adipisci provident enim. Provident!</div>
        </p>
      </div>
      <div className="about-right">
        <img src={athleteImage} alt="Athlete ready to run" />
      </div>
    </section>
  );
};

export default About;
