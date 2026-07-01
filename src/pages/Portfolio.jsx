const projects = [
  {
    name: 'Northwind Climate Lab',
    description:
      'Interactive dashboard showing energy usage with contextual narratives so operators can act before storms.',
    tech: ['React', 'TypeScript', 'D3.js']
  },
  {
    name: 'Fika Studio',
    description:
      'Product site and booking flow for a design consultancy with smooth scroll transitions and configurable case studies.',
    tech: ['Vite', 'Tailwind CSS', 'Contentful']
  },
  {
    name: 'Pulse Analytics',
    description:
      'Personalized analytics portal for finance teams featuring multi-account summaries and AI insights.',
    tech: ['React Query', 'Node.js', 'Chart.js']
  }
];

export default function Portfolio() {
  return (
    <section className="page portfolio">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Portfolio highlights</p>
          <h1>Stories from the dashboard lab.</h1>
          <p className="lead">
            Every project begins with research, followed by prototypes that balance delight with clarity.
          </p>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
            <button type="button">View case study</button>
          </article>
        ))}
      </div>
    </section>
  );
}
