import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icons"

const tasks = [
  {
    title: "Solar Panel Installation Workshop",
    type: "Energy Systems",
    date: "Next Week",
    status: "Upcoming",
    skills: ["Solar", "Teaching"]
  },
  {
    title: "Community Garden Maintenance",
    type: "Food Systems",
    date: "Tomorrow",
    status: "Assigned",
    skills: ["Gardening", "Coordination"]
  },
  {
    title: "Water System Documentation",
    type: "Water Management",
    date: "Open",
    status: "Available",
    skills: ["Technical Writing", "Water Systems"]
  }
]

export function UserTasks() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tasks & Opportunities</CardTitle>
        <Button variant="outline" size="sm">
          <Icon name="plus" className="mr-2 h-4 w-4" />
          Find Tasks
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {tasks.map((task) => (
            <div key={task.title} className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.type}</p>
                </div>
                <Button 
                  variant={task.status === "Available" ? "default" : "outline"}
                  size="sm"
                >
                  {task.status}
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Icon name="calendar" className="h-4 w-4" />
                  {task.date}
                </div>
                <div className="flex gap-1">
                  {task.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}