import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-block" id="experience">
      <div className="section-heading">
        <h2>Experience</h2>
        <span>Where I have worked</span>
      </div>
      <div className="experience-list">
        {EXPERIENCES.map((experience, index) => (
          <motion.article
            className={`experience-row${index === 0 ? " experience-row-featured" : ""}`}
            key={`${experience.company}-${experience.year}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: index * 0.08, ease: "easeOut" }}
          >
            <div className="experience-meta">
              <span className="experience-marker" aria-hidden="true" />
              <p className="experience-date mono-label">{experience.year}</p>
            </div>
            <div className="experience-detail">
              {index === 0 && <span className="experience-current"><span aria-hidden="true" /> Current role</span>}
              <h3>{experience.role}<span> / {experience.company}</span></h3>
              <p>{experience.description}</p>
              <ul className={`inline-list${index === 0 ? " experience-tech-current" : ""}`} aria-label="Technologies used">
                {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
