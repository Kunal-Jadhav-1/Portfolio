const skillGroups = [
  { title: "Data platforms", items: ["BigQuery", "Snowflake", "Google Cloud Storage"] },
  { title: "Pipelines & modelling", items: ["Airflow", "Cloud Composer", "dbt"] },
  { title: "Languages", items: ["Python", "SQL", "Shell", "JavaScript"] },
  { title: "Development", items: ["React", "Node.js", "MongoDB", "MySQL", "Git"] },
];

const Skills = () => (
  <section className="section-block" id="skills">
    <div className="section-heading">
      <h2>Tools of the trade</h2>
      <span>Technologies I work with</span>
    </div>
    <div className="skill-grid">
      {skillGroups.map((group, index) => (
        <div className="skill-group" key={group.title}>
          <span className="mono-label">0{index + 1} / {group.title}</span>
          <ul>
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;