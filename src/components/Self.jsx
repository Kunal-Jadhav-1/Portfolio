import { motion, useReducedMotion } from "framer-motion";
import { EXPERIENCES, HERO_CONTENT } from "../constants";
import Resume from "../assets/Kunal_Jadhav_Resume.pdf";

const flowSteps = [
  { name: "SOURCE", description: "APIs / files / databases" },
  { name: "INGEST", description: "Airflow orchestration" },
  { name: "TRANSFORM", description: "SQL + dbt models" },
  { name: "MODEL", description: "BigQuery / Snowflake" },
];
const currentRole = EXPERIENCES[0];
const roleText = "Data Engineer at Bitwise Solutions";

const Self = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="eyebrow hero-eyebrow">Data engineer <span>/</span> Pune, India</p>
        <h1 className="hero-title">Kunal<br /><em>Jadhav.</em></h1>
        <p className="hero-role" aria-label={roleText}>
          <span className="typewriter-text" aria-hidden="true">{roleText}</span>
          <span className="typewriter-caret" aria-hidden="true" />
        </p>
        <p className="hero-description">{HERO_CONTENT}</p>
        <div className="hero-actions">
          <a className="primary-link focus-ring" href="#experience">View experience <span aria-hidden="true">&#8599;</span></a>
          <a className="text-link focus-ring" href={Resume} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">&#8599;</span></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-experience"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <div className="flow-topline">
          <span className="mono-label">Data workflow</span>
        </div>
        <div className="flow-canvas">
          <div className="flow-axis" aria-hidden="true" />
          {flowSteps.map((step, index) => (
            <div className={`flow-step flow-step-${index + 1}`} key={step.name}>
              <span className="flow-node" aria-hidden="true" />
              <span className="mono-label">{step.name}</span>
              <span className="flow-description">{step.description}</span>
            </div>
          ))}
        </div>
        <div className="flow-toolkit">
          <span className="mono-label">Current toolkit</span>
          <ul>
            {currentRole.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* <span>#MathGuy</span><span>#AlwaysUpForIcecream</span> */}
    </section>
  );
};

export default Self;
