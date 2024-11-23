import { ProjectForm } from "@/components/projects/project-form"

export default function CreateProjectPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Project</h1>
          <p className="text-muted-foreground mt-2">
            Submit your project proposal for review and approval.
          </p>
        </div>
        <ProjectForm />
      </div>
    </div>
  )
}