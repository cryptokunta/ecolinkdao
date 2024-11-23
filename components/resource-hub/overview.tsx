import { StatsGrid } from "@/components/resource-hub/stats-grid"
import { RecentActivity } from "@/components/resource-hub/recent-activity"
import { ResourceDistribution } from "@/components/resource-hub/resource-distribution"

export function ResourceOverview() {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <div className="grid gap-6 md:grid-cols-2">
        <ResourceDistribution />
        <RecentActivity />
      </div>
    </div>
  )
}