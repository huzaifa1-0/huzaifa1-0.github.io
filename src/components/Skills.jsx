import { skills } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="wrap section__grid">
        <h2 className="section__title">Skills</h2>
        <dl className="skills">
          {skills.map((row) => (
            <div className="skills__row" key={row.group}>
              <dt>{row.group}</dt>
              <dd>{row.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
