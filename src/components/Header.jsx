import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (page, anchor) => {
    setCurrentPage(page);
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="container">
        <h1 className="logo" style={{ cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
          Huzaifa
        </h1>
        <nav>
          <ul>
            <li>
              <a onClick={() => handleNavClick('home', 'about')}>About</a>
            </li>
            <li>
              <a onClick={() => handleNavClick('contact')}>Book a call</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
