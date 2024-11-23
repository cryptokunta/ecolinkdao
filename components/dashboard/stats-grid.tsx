import { Users, Calendar, Activity } from "lucide-react"
import { StatsCard } from "./stats-card"

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatsCard
        title="Total Members"
        value="1,234"
        change="+12% from last month"
        icon={Users}
      />
      <StatsCard
        title="Active Events"
        value="23"
        change="8 upcoming this week"
        icon={Calendar}
      />
      <StatsCard
        title="Engagement Rate"
        value="87%"
        change="+3% from last week"
        icon={Activity}
      />
    </div>
  )
}