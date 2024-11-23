import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const impactMetrics = [
  {
    label: "Projects Contributed",
    value: "12",
    icon: "rocket",
    change: "+3 this month"
  },
  {
    label: "Carbon Offset",
    value: "4.2t",
    icon: "leaf",
    change: "+0.8t this month"
  },
  {
    label: "Community Reach",
    value: "328",
    icon: "users",
    change: "+45 this month"
  }
]

export function UserImpact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Icon name={metric.icon} className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{metric.label}</p>
                  <span className="text-sm text-green-500">{metric.change}</span>
                </div>
                <p className="text-2xl font-bold mt-1">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}