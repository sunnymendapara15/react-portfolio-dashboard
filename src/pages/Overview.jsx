import StatCard from '../components/StatCard';

const statData = [
  { label: 'Projects', value: '12', hint: 'Delivered in the last 2 years' },
  { label: 'Users Impacted', value: '150K', hint: 'Live products currently in use' },
  { label: 'Avg. Delivery', value: '3 wks', hint: 'From concept to launch' },
  { label: 'Passion Focus', value: 'UX + Data', hint: 'Symmetric blend of design & insight' }
];

const highlights = [
  {
    title: 'Design Systems',
    detail: 'Built reusable component libraries that keep cross-team apps consistent and accessible.'
  },
  {
    title: 'Product Strategy',
    detail: 'Partnered with PMs to turn research sprint work into actionable roadmaps.'
  },
  {
    title: 'Data Storytelling',
    detail: 'Visualized health metrics that helped leadership make confident decisions.'
  }
];

export default function Overview() {
  return (
    <section className="page overview">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Portfolio Dashboard</p>
          <h1>Designing calm, data-driven experiences.</h1>
          <p className="lead">
            I craft dependable web products with thoughtful layouts, measurable outcomes, and polished motion
            that help people stay focused.
          </p>
        </div>
        <div className="cta">
          <p>Currently booking new collaborations for early Q4 launches.</p>
          <button type="button">Work with me</button>
        </div>
      </div>

      <div className="stats-grid">
        {statData.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="highlights">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
