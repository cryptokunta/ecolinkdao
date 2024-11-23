import { ProjectReview } from "@/components/projects/project-review"

export default function ProjectReviewPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Project Review</h1>
          <p className="text-muted-foreground mt-2">
            Review and approve project proposals.
          </p>
        </div>
        <ProjectReview />
      </div>
    </div>
  )
}