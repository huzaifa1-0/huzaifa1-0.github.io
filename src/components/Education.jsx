import { education } from '../data/resume';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="wrap section__grid">
        <h2 className="section__title">Education</h2>
        <article className="entry">
          <h3 className="entry__title">{education.degree}</h3>
          <p className="entry__meta">
            {education.school}, {education.place}
          </p>
          <p className="entry__period">{education.period}</p>
        </article>
      </div>
    </section>
  );
};

export default Education;
