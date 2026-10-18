import { profile } from '../data/resume';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__bar">
        <p>
          {profile.name}, {profile.role} in {profile.location}.
        </p>
        <a className="text-link" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
