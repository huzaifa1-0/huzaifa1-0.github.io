import { useState } from 'react';

const EMAIL = 'huzaifaras10@gmail.com';

const channels = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', value: '+92-310-7164892', href: 'tel:+923107164892' },
  { label: 'LinkedIn', value: 'linkedin.com/in/huzaifarashid1', href: 'https://linkedin.com/in/huzaifarashid1', external: true },
  { label: 'GitHub', value: 'github.com/huzaifa1-0', href: 'https://github.com/huzaifa1-0', external: true },
  { label: 'Location', value: 'Lahore, Pakistan' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // There is no backend, so the form opens the visitor's email app with the
  // message filled in instead of pretending to send it.
  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Let's talk</h2>
          <p className="section__note">Open to AI engineering roles and projects.</p>
        </div>
        <div className="section__body contact">
          <ul className="channels">
            {channels.map((channel) => (
              <li className="channels__row" key={channel.label}>
                <span className="channels__label">{channel.label}</span>
                {channel.href ? (
                  <a
                    className="link"
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span>{channel.value}</span>
                )}
              </li>
            ))}
          </ul>

          <form className="form" onSubmit={onSubmit}>
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input className="form__input" id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} required />

            <label className="form__label" htmlFor="message">
              What do you want to build?
            </label>
            <textarea className="form__input form__input--area" id="message" name="message" rows={5} value={form.message} onChange={onChange} required />

            <button className="btn btn--primary" type="submit">
              Open in email app
            </button>
            <p className="form__hint">This opens your email app with the message filled in.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
