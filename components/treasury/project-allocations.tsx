import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"
import { Badge } from "@/components/ui/badge"

const allocations = [
  {
    project: "Seed Camp",
    totalBudget: 320,
    allocations: [
      {
        category: "Construction Materials",
        items: [
          { name: "Wood", amount: 180, status: "purchased" },
          { name: "Cement", amount: 140, status: "purchased" }
        ]
      }
    ],
    status: "in-progress"
  }
]

export function ProjectAllocations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Allocations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {allocations.map((project) => (
            <div key={project.project} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{project.project}</h3>
                  <p className="text-sm text-muted-foreground">
                    Total Budget: €{project.totalBudget}
                  </p>
                </div>
                <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>

              {project.allocations.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h4 className="text-sm font-medium">{category.category}</h4>
                  <div className="space-y-2">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <Icon 
                            name={item.status === "purchased" ? "check-circle" : "circle"} 
                            className={`h-4 w-4 ${item.status === "purchased" ? "text-green-500" : "text-muted-foreground"}`} 
                          />
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">€{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}