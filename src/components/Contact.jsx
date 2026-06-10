import React from 'react';

const Contact = ({ setCurrentPage }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-section">
      <div className="heading-line">
        <hr className="purple-line" />
      </div>
      <h1>Looking to collaborate or need assistance with your next project?</h1>
      <a href="#contact" className="button" onClick={handleContactClick}>
        Let's get on call
      </a>
      <div className="contacts">
        <p>Phone: +923107164892</p>
        <p>Email: huzaifaras10@gmail.com</p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/huzaifa-rashid-ba71a8263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://medium.com/@huzaifa1" target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" alt="Medium" />
        </a>
        <a href="https://github.com/huzaifa1-0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
