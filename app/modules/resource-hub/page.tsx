"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceOverview } from "@/components/resource-hub/overview"
import { ResourceInventory } from "@/components/resource-hub/inventory"
import { ResourceAllocation } from "@/components/resource-hub/allocation"
import { ResourceAnalytics } from "@/components/resource-hub/analytics"

export default function ResourceHub() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Baoville Resource Hub</h1>
        <p className="text-muted-foreground">
          Track, manage, and analyze community resources efficiently.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <ResourceOverview />
        </TabsContent>

        <TabsContent value="inventory">
          <ResourceInventory />
        </TabsContent>

        <TabsContent value="allocation">
          <ResourceAllocation />
        </TabsContent>

        <TabsContent value="analytics">
          <ResourceAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  )
}