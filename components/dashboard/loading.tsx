export function DashboardSkeleton({ type }: { type: 'metrics' | 'tasks' | 'analytics' }) {
  if (type === 'metrics') {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[120px] rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    )
  }

  if (type === 'tasks') {
    return (
      <div className="h-[400px] rounded-lg bg-muted animate-pulse" />
    )
  }

  return (
    <div className="h-[400px] rounded-lg bg-muted animate-pulse" />
  )
}