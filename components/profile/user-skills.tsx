import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icons"

const skills = [
  {
    category: "Energy",
    items: ["Solar Installation", "Grid Design", "Energy Efficiency"],
    icon: "zap"
  },
  {
    category: "Community",
    items: ["Workshop Facilitation", "Project Management", "Education"],
    icon: "users"
  },
  {
    category: "Technical",
    items: ["System Documentation", "Data Analysis", "Technical Writing"],
    icon: "code"
  }
]

export function UserSkills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills & Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name={skillGroup.icon} className="h-4 w-4 text-primary" />
                <h4 className="font-medium">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent/10 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}