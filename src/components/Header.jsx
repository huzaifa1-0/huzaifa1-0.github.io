import { useEffect, useState } from 'react';
import resumePdf from '../assets/Huzaifa Rashid AI Engineer.pdf';
import { profile } from '../data/resume';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -65% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <a className="site-header__brand" href="#top" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="site-nav" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Sections">
          <ul className="site-nav__list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  className="site-nav__link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--line site-nav__resume" href={resumePdf} download="Huzaifa_Rashid_Resume.pdf">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
