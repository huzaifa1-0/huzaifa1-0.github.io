import portrait from '../assets/portfolio.png';
import { about } from '../data/resume';

const About = () => {
  return (
    <section id="about" className="section section--first">
      <div className="wrap section__grid">
        <h2 className="section__title">About</h2>
        <div className="about">
          <div className="prose">
            {about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <img className="about__photo" src={portrait} alt="Huzaifa Rashid" width="624" height="624" />
        </div>
      </div>
    </section>
  );
};

export default About;
