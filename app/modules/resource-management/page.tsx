"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, FolderOpen, BarChart } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"

export default function ResourceManagement() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resource Management</h1>
        <p className="text-muted-foreground">
          Track and allocate resources across environmental projects.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="allocations">Allocations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <StatsCard
              title="Total Resources"
              value="156"
              change="12 added this month"
              icon={Database}
            />
            <StatsCard
              title="Active Projects"
              value="18"
              change="3 completed this month"
              icon={FolderOpen}
            />
            <StatsCard
              title="Resource Utilization"
              value="92%"
              change="+5% from last month"
              icon={BarChart}
            />
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Resource Inventory</CardTitle>
              <CardDescription>Manage and track available resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Resource management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
              <CardDescription>Track and manage environmental projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Project management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocations">
          <Card>
            <CardHeader>
              <CardTitle>Resource Allocations</CardTitle>
              <CardDescription>Manage resource distribution across projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Resource allocation interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}