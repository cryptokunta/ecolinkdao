"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icons'
import { MetricChart } from '@/components/charts/metric-chart'

const mockData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Active Projects',
      data: [12, 19, 15, 25, 22, 30],
      borderColor: 'hsl(var(--primary))',
      backgroundColor: 'hsl(var(--primary) / 0.1)',
    }
  ]
}

export function StatsOverview() {
  const [stats, setStats] = useState({
    activeProjects: '-',
    members: '-',
    resources: '-',
    successRate: '-'
  })

  useEffect(() => {
    // Simulate data fetching
    const fetchStats = async () => {
      // In a real app, this would be an API call
      setStats({
        activeProjects: '30',
        members: '1,234',
        resources: '486',
        successRate: '92%'
      })
    }

    fetchStats()
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
              <h3 className="text-2xl font-bold tracking-tight">{stats.activeProjects}</h3>
              <p className="text-xs text-muted-foreground mt-1">+5 this month</p>
            </div>
            <div className="text-primary">
              <Icon name="rocket" className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Community Members</p>
              <h3 className="text-2xl font-bold tracking-tight">{stats.members}</h3>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </div>
            <div className="text-primary">
              <Icon name="users" className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Resources Shared</p>
              <h3 className="text-2xl font-bold tracking-tight">{stats.resources}</h3>
              <p className="text-xs text-muted-foreground mt-1">+24 this week</p>
            </div>
            <div className="text-primary">
              <Icon name="share" className="h-5 w-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
              <h3 className="text-2xl font-bold tracking-tight">{stats.successRate}</h3>
              <p className="text-xs text-muted-foreground mt-1">+3% from last week</p>
            </div>
            <div className="text-primary">
              <Icon name="target" className="h-5 w-5" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <MetricChart
          title="Project Growth"
          data={mockData}
          type="line"
        />
        <MetricChart
          title="Resource Distribution"
          data={{
            labels: ['Energy', 'Water', 'Food', 'Waste'],
            datasets: [{
              label: 'Resources',
              data: [30, 25, 20, 25],
              backgroundColor: [
                'hsl(142 59% 49% / 0.5)',
                'hsl(217 91% 60% / 0.5)',
                'hsl(45 93% 47% / 0.5)',
                'hsl(14 80% 53% / 0.5)'
              ]
            }]
          }}
          type="pie"
        />
      </div>
    </div>
  )
}