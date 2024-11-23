import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Database } from "lucide-react"

const modules = [
  {
    title: "Community Engagement",
    description: "Manage community interactions, events, and engagement metrics",
    icon: Users,
    href: "/modules/community-engagement",
    stats: {
      members: "1.2k",
      events: "24",
      engagement: "87%"
    }
  },
  {
    title: "Resource Management",
    description: "Track and allocate resources across environmental projects",
    icon: Database,
    href: "/modules/resource-management",
    stats: {
      projects: "18",
      resources: "156",
      efficiency: "92%"
    }
  }
]

export function ModuleGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {modules.map((module) => {
        const Icon = module.icon
        return (
          <Link key={module.title} href={module.href}>
            <Card className="h-full hover:bg-accent/5 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <CardTitle>{module.title}</CardTitle>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(module.stats).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-sm text-muted-foreground capitalize">{key}</p>
                      <p className="text-lg font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}