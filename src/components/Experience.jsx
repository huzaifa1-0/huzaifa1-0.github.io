import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="heading-line">
        <h1>Experience</h1>
        <hr className="purple-line" />
      </div>
      <div className="experience-details">
        <div className="experience-item">
          <h2>Associate Software Engineer (AI/ML)</h2>
          <p className="subtext">(TDC) THE DEV CORPORATE</p>
          <p className="details">March 2026 – Present</p>
        </div>
        <div className="experience-item" style={{ marginTop: '30px' }}>
          <h2>Web Developer (Internship)</h2>
          <p className="subtext">BIGIMMERSIVE</p>
          <p className="details">June 2023 – Aug 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
