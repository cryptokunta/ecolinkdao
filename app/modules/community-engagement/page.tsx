"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsGrid } from "@/components/dashboard/stats-grid"

export default function CommunityEngagement() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Community Engagement</h1>
        <p className="text-muted-foreground">
          Manage and track community activities, events, and member engagement.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <StatsGrid />
        </TabsContent>

        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Members Directory</CardTitle>
              <CardDescription>View and manage community members.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Member management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Events Calendar</CardTitle>
              <CardDescription>Schedule and manage community events.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Event management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
              <CardDescription>Track community engagement and participation.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Metrics dashboard coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}