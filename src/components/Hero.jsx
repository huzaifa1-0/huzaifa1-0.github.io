import resumePdf from '../assets/Huzaifa Rashid AI Engineer.pdf';
import { profile } from '../data/resume';
import WorkMap from './WorkMap';

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            <span>Huzaifa</span>
            <span>Rashid</span>
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--white" href={resumePdf} download="Huzaifa_Rashid_Resume.pdf">
              Download resume
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <WorkMap />
      </div>
    </section>
  );
};

export default Hero;
