import { Package2, Recycle, Timer, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatsCard
        title="Total Resources"
        value="486"
        change="+24 this week"
        icon={Package2}
      />
      <StatsCard
        title="Available"
        value="312"
        change="64% of total"
        icon={Timer}
      />
      <StatsCard
        title="In Use"
        value="174"
        change="36% of total"
        icon={Recycle}
      />
      <StatsCard
        title="Utilization Rate"
        value="78%"
        change="+5% from last month"
        icon={TrendingUp}
      />
    </div>
  )
}