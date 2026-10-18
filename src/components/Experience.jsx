import { experience } from '../data/resume';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="wrap section__grid">
        <h2 className="section__title">Experience</h2>
        <div>
          {experience.map((job) => (
            <article className="entry" key={job.id}>
              <h3 className="entry__title">{job.role}</h3>
              <p className="entry__meta">
                {job.org}
                {job.place ? `, ${job.place}` : ''}
              </p>
              <p className="entry__period">{job.period}</p>
              {job.points.length > 0 && (
                <ul className="bullets">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
