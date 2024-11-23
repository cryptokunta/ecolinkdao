import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResourceDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Water Resources</span>
              <span className="text-sm text-muted-foreground">35%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full w-[35%] rounded-full bg-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Food Production</span>
              <span className="text-sm text-muted-foreground">28%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full w-[28%] rounded-full bg-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tools & Equipment</span>
              <span className="text-sm text-muted-foreground">22%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full w-[22%] rounded-full bg-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Energy Systems</span>
              <span className="text-sm text-muted-foreground">15%</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full w-[15%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}