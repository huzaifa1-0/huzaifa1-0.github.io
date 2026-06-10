import React from 'react';
import portfolioImg from '../assets/portfolio.png';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={portfolioImg} alt="Huzaifa Rashid" />
      </div>
      <div className="hero-content">
        <h2>Hi, I'm <span className="highlight">Huzaifa Rashid</span></h2>
        <p>and I'm an <span class="highlight">AI Engineer</span>.</p>
        <a href={resumePdf} download="Huzaifa_Rashid_Resume.pdf" className="btn">
          Download my resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
