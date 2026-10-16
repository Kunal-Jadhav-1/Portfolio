import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <h2>Web projects</h2>
        <span>Selected projects &amp; experiments</span>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <article className="project-item" key={project.title}>
            <a className="project-image-link focus-ring" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <div className="project-image-frame">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                <span className="project-index mono-label">0{index + 1}</span>
              </div>
            </a>
            <div className="project-heading">
              <h3>{project.title}</h3>
              <a className="project-visit focus-ring" href={project.link} target="_blank" rel="noreferrer">Visit <span aria-hidden="true">&#8599;</span></a>
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="inline-list" aria-label="Technologies used">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
