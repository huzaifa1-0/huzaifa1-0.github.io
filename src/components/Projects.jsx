import { projects } from '../data/resume';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="wrap section__grid">
        <h2 className="section__title">Projects</h2>
        <div>
          {projects.map((project) => (
            <article className="entry" key={project.id}>
              <h3 className="entry__title entry__title--project">{project.title}</h3>
              <p className="entry__meta">
                {project.note ? `${project.note}. ` : ''}
                {project.stack}
              </p>
              <ul className="bullets">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a className="text-link entry__link" href={project.href} target="_blank" rel="noopener noreferrer">
                View {project.title} on GitHub
              </a>
            </article>
          ))}
          <a
            className="text-link entry__more"
            href="https://github.com/huzaifa1-0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
