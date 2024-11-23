import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package2, ArrowRight, ArrowLeft } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "allocation",
    resource: "Solar Panels",
    quantity: 4,
    location: "Community Center",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "return",
    resource: "Garden Tools",
    quantity: 6,
    location: "Tool Library",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "allocation",
    resource: "Water Tanks",
    quantity: 2,
    location: "North Garden",
    timestamp: "6 hours ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                {activity.type === "allocation" ? (
                  <ArrowRight className="h-4 w-4 text-primary" />
                ) : (
                  <ArrowLeft className="h-4 w-4 text-primary" />
                )}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.resource}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.type === "allocation" ? "Allocated to" : "Returned to"}{" "}
                  {activity.location}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                {activity.timestamp}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}