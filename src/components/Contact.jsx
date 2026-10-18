import { useState } from 'react';
import resumePdf from '../assets/Huzaifa Rashid AI Engineer.pdf';
import { profile } from '../data/resume';

const Contact = () => {
  const [copyState, setCopyState] = useState('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('failed');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap section__grid">
        <h2 className="section__title">Contact</h2>
        <div>
          <p className="contact__lead">
            Have a role or a project in mind? Write to me and I'll reply within 24 hours.
          </p>
          <a className="contact__email" href={`mailto:${profile.email}?subject=Hello%20Huzaifa`}>
            {profile.email}
          </a>

          <div className="contact__actions">
            <a className="btn btn--solid" href={`mailto:${profile.email}?subject=Hello%20Huzaifa`}>
              Email me
            </a>
            <button type="button" className="btn btn--line" onClick={copyEmail}>
              {copyState === 'copied' ? 'Email address copied' : 'Copy email address'}
            </button>
            <a className="btn btn--line" href={resumePdf} download="Huzaifa_Rashid_Resume.pdf">
              Download resume
            </a>
          </div>
          <p className="contact__status" role="status">
            {copyState === 'failed' && `Copying didn't work in this browser. My address is ${profile.email}.`}
          </p>

          <dl className="contact__list">
            <div className="contact__row">
              <dt>Phone</dt>
              <dd>
                <a className="text-link" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div className="contact__row">
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            {profile.links.map((link) => (
              <div className="contact__row" key={link.label}>
                <dt>{link.label}</dt>
                <dd>
                  <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
