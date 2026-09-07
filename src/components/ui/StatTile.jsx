export default function StatTile({ value, label }) {
  return (
    <div className="rounded-card border border-line bg-surface px-4 py-3.5">
      <div className="text-2xl font-semibold tracking-tight text-accent">{value}</div>
      <div className="mt-0.5 text-[0.8125rem] leading-snug text-muted">{label}</div>
    </div>
  )
}
