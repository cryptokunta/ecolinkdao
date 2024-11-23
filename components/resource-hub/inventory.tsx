import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ResourceInventory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Inventory</CardTitle>
        <CardDescription>
          View and manage all available community resources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Resource inventory interface coming soon.</p>
      </CardContent>
    </Card>
  )
}