import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "Seed Camp Construction",
    category: "Construction",
    progress: 100,
    status: "Ongoing",
    tags: ["Community"],
    role: "Lead"
  },
  {
    name: "Water Tower Installation",
    category: "Infrastructure",
    progress: 20,
    status: "In Progress",
    tags: ["Water"],
    role: "Member"
  }
]

export function ActiveProjects() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Active Projects</CardTitle>
        <Icon name="hard-hat" className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-sm line-clamp-1">{project.name}</h4>
                <Badge variant="outline" className="text-xs shrink-0">
                  {project.role}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-muted">
                  <div 
                    className="h-full rounded-full bg-primary" 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {project.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}