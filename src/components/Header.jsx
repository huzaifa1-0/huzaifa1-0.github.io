import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const resumeUrl = `${import.meta.env.BASE_URL}Huzaifa_Rashid_Resume.pdf`;

export default function Header() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a className="site-header__name" href="#top">
          Huzaifa Rashid
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              className="nav__link"
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--small btn--primary" href={resumeUrl} download="Huzaifa_Rashid_Resume.pdf">
          Resume
        </a>
      </div>
    </header>
  );
}
