export default function StatCard({ label, value, hint }) {
  return (
    <article className="stat-card">
      <p className="stat-card-label">{label}</p>
      <h3 className="stat-card-value">{value}</h3>
      <p className="stat-card-hint">{hint}</p>
    </article>
  );
}
