import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../styles/Home.css';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
