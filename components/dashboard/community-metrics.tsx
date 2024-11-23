import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const metrics = [
  {
    label: "Knowledge Shared",
    value: "-",
    icon: "book"
  },
  {
    label: "Resources",
    value: "-",
    icon: "repeat"
  },
  {
    label: "Collaborations",
    value: "-",
    icon: "users"
  }
]

export function CommunityMetrics() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Community Impact</CardTitle>
        <Icon name="trending-up" className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Icon name={metric.icon} className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}