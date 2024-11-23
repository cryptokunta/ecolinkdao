import { Badge } from "@/components/ui/badge"
import { ProjectStatus } from "@/lib/types/project"

interface ProjectStatusBadgeProps {
  status: ProjectStatus
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const variants = {
    draft: "bg-muted text-muted-foreground",
    pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    approved: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    rejected: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
  }

  const labels = {
    draft: "Draft",
    pending: "Under Review",
    approved: "Approved",
    rejected: "Rejected"
  }

  return (
    <Badge variant="outline" className={`uppercase ${variants[status]}`}>
      {labels[status]}
    </Badge>
  )
}